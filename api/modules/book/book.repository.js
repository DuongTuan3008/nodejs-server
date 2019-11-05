const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
  title: String,
  category: String,
  description: String,
  author: String,
  avalink: String,
  chapter: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Chapter",
  }],
});

const BookModel = mongoose.model('Book', BookSchema);

const find = async function (query) {
  return await BookModel.find(query).populate("chapters");
}

const findById = async function (id) {
  return await BookModel.findById(id).populate("chapters");
}

const create = async function (data) {
  const newDocument = new BookModel(data);
  return await newDocument.save();
}

const update = async function (id, data) {
  return await BookModel.findByIdAndUpdate(id, { $set: data }, { new: true });
}

const deleteOne = async function (id) {
  return await BookModel.findByIdAndDelete(id);
}

module.exports = {
  find: find,
  findById: findById,
  create: create,
  update: update,
  delete: deleteOne,
};


