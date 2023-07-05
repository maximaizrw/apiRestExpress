const mongoose = require("mongoose"); // Importar el módulo mongoose para interactuar con la base de datos MongoDB

const UserSchema = new mongoose.Schema({ // Definir un nuevo esquema de mongoose para el modelo de usuario
    name: String, // Campo de nombre de tipo String
    age: Number, // Campo de edad de tipo Number
    email: { type: String, required: true, unique: true }, // Campo de correo electrónico requerido y único
    password: { type: String, required: true }, // Campo de contraseña requerido
    role: { type: String, enum: ["user", "admin"], default: "user" } // Campo de rol que solo puede ser "user" o "admin" con valor predeterminado "user"
}, {
    timestamps: true, // Agregar automáticamente campos de fecha y hora de creación y actualización
    versionKey: false // No incluir la versión del documento en la respuesta
});

module.exports = mongoose.model("User", UserSchema); // Exportar el modelo de usuario basado en el esquema creado
