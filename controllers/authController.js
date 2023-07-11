const { matchedData } = require("express-validator");
const { handleHttpError } = require("../utils/handleErrors");
const { encryptPassword, comparePassword } = require("../utils/handlePassword");
const { userModel } = require("../models/index");



const register = async (req, res) => {
    try {
        req = matchedData(req);
        const passwordHash = await encryptPassword(req.password);
        const body = { ...req, passwordHash };
        const user = await userModel.create(body);
        user.set('password', undefined, { strict: false });
        res.send({ user });
    } catch (error) {
        handleHttpError(res, "ERROR_REGISTER");
    }
};

module.exports = { register };