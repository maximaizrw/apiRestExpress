const { storageModel } = require("../models/index");
const PUBLIC_URL = process.env.PUBLIC_URL; 

const getItems = async (req, res) => {
    const data = await storageModel.find({});
    res.send({data});
}

const getItem = () => {

}


const createItem = async (req, res) => {
    const {body, file} = req;
    const fileData = {
        filename: file.filename,
        url: `${PUBLIC_URL}/${file.filename}`,
    }
    const data = await storageModel.create(fileData);
    res.send({data});
}

const updateItem = () => {

}

const deleteItem = () => {

}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };