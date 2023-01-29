const express = require("express");
const path = require("path");
const { agregarRegistro, obtenerRegistros } = require("./consultas");

const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
// app.use(express.static(path.join(__dirname, 'static')));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + `/index.html`));
});

app.get("/posts", async (req, res) => {
  const posts = await obtenerRegistros();
  res.json(posts);
});

app.post("/posts", async (req, res) => {
  try {
    const { titulo, img, descripcion } = req.body;
    await agregarRegistro(titulo, img, descripcion);
    res.send("post agregado exitosamente");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al agregar el post");
  }
});

app.listen(port, console.log(`SERVIDOR ENCENDIDO EN EL PUERTO ${port}`));
