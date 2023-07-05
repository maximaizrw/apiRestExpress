const mongoose = require("mongoose");

const dbConnect = async () => {
  try {
    const DB_URI = process.env.DB_URI;
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Conexión exitosa a la base de datos");
    // Tu código después de la conexión exitosa
  } catch (error) {
    console.log("Error de conexión a la base de datos", error);
  }
};

module.exports = dbConnect;
