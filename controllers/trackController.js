const { trackModel } = require("../models/index");
const { matchedData, body } = require("express-validator");
const { handleHttpError } = require("../utils/handleErrors");

const getItems = async (req, res) => {
    try {
        const data = await trackModel.find({}).lean();
        res.send({ data });
    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEMS");
    }
};


const getItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await trackModel.findById(id);
        res.send({ data });
    } catch (error) {
        handleHttpError(res, "ERROR_GET_ITEM");
    }
};


const createItem = async (req, res) => {
    try {
        const body = matchedData(req);
        const data = await trackModel.create(body);
        res.json({ data });
    } catch (error) {
        handleHttpError(res, "ERROR_CREATE_ITEMS");
    }
};



const updateItem = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;

        const updatedItem = await trackModel.findByIdAndUpdate(id, body, { new: true });

        if (!updatedItem) {
            return handleHttpError(res, "ITEM_NOT_FOUND", 404);
        }

        res.json({ data: updatedItem });
    } catch (error) {
        handleHttpError(res, "ERROR_UPDATE_ITEM");
    }
};


const deleteItem = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedItem = await trackModel.findByIdAndDelete(id);

        if (!deletedItem) {
            return handleHttpError(res, "ITEM_NOT_FOUND", 404);
        }

        res.json({ message: "Item deleted successfully" });
    } catch (error) {
        handleHttpError(res, "ERROR_DELETE_ITEM");
    }
};

module.exports = { getItems, getItem, createItem, updateItem, deleteItem };