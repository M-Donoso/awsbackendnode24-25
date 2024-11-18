const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;


app.get("/pedidos", (req, res) => {
  res.send("Bienvenido a la app de pedidos");
});


app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
