const mongoose = require("mongoose"); // Importar el módulo mongoose para interactuar con la base de datos MongoDB

const StorageSchema = new mongoose.Schema({ // Definir un nuevo esquema de mongoose para el modelo de usuario
    url: String,
    filename: Number
}, {
    timestamps: true, // Agregar automáticamente campos de fecha y hora de creación y actualización
    versionKey: false // No incluir la versión del documento en la respuesta
});

module.exports = mongoose.model("Storage", StorageSchema); // Exportar el modelo de usuario basado en el esquema creado
