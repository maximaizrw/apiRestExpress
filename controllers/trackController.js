const { trackModel } = require("../models/index");

const getItems = async (req, res) => {
    const data = await trackModel.find({});
    res.send({data});
}

const getItem = () => {

}

const createItem = async (req, res) => {
    const {body} = req;
    console.log(body);
    const data = await trackModel.create(body);
    res.send({data});
}



const updateItem = () => {

}

const deleteItem = () => {

}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };