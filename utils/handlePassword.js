const bcryptjs = require("bcryptjs");  

const encryptPassword = async (passwordPlain) => {
    const hash = await bcryptjs.hash(passwordPlain, 10);
    return hash;
};

const comparePassword = async (passwordPlain, hashPassword) => {
    return await bcryptjs.compare(passwordPlain, hashPassword);
}

module.exports = {
    encryptPassword,
    comparePassword
}
