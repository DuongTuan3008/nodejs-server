const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	username: {
		type: String,
		required: true
	},
	password: {
		type: String,
		require: true
	},
	email: {
		type: String,
		required: true
	},
	phone: {
		type: String
	}
});

const UserModel = mongoose.model('User', UserSchema);

const find = async function (query) {
	const limit = Number(query.limit);
	const skip = Number(query.skip);
	delete query.skip;
	delete query.limit;
	if (limit && skip !== undefined) {
		return await UserModel.find(query).limit(limit).skip(skip);
	} else {
		return await UserModel.find(query);
	}
};

const count = async function (query) {
	return await UserModel.count(query);
};

const findById = async function (id) {
	return await UserModel.findById(id);
};

const create = async function (data) {
	const newDoc = new UserModel(data);
	return await newDoc.save();
};

const update = async function (id, data) {
	return await UserModel.findByIdAndUpdate(id, data, { new: true });
};

const deleteOne = async function (id) {
	return await UserModel.findByIdAndDelete(id);
};

module.exports = {
	find: find,
	findById: findById,
	create: create,
	update: update,
	delete: deleteOne,
	count: count
};
