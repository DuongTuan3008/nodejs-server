const mongoose = require('mongoose');

const ChapterSchema = mongoose.Schema({
	book: String,
	number: Number,
	link: Array
});

const ChapterModel = mongoose.model('Chapter', ChapterSchema);

const find = async function (query) {
	return await ChapterModel.find(query);
};

const findById = async function (id) {
	return await ChapterModel.findById(id);
};

const create = async function (data) {
	const newDocument = new ChapterModel(data);
	return await newDocument.save();
};

const update = async function (id, data) {
	return await ChapterModel.findByIdAndUpdate(id, { $set: data }, { new: true });
};

const deleteOne = async function (id) {
	return await ChapterModel.findByIdAndDelete(id);
};

module.exports = {
	find: find,
	findById: findById,
	create: create,
	update: update,
	delete: deleteOne
};
