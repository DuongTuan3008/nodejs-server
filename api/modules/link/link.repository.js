const mongoose = require('mongoose');

const LinkSchema = mongoose.Schema({
    number: Number,
});

const LinkModel = mongoose.model('Link', LinkSchema);

const find = async function (query) {
    return await LinkModel.find(query);
};

const findById = async function (id) {
    return await LinkModel.findById(id);
};

const create = async function (data) {
    const newDocument = new LinkModel(data);
    return await newDocument.save();
};

const update = async function (id, data) {
    return await LinkModel.findByIdAndUpdate(id, { $set: data }, { new: true });
};

const deleteOne = async function (id) {
    return await LinkModel.findByIdAndDelete(id);
};

module.exports = {
    find: find,
    findById: findById,
    create: create,
    update: update,
    delete: deleteOne
};
