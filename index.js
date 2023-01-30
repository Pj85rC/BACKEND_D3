const express = require("express");
const path = require("path");
const {
  agregarRegistro,
  obtenerRegistros,
  modificarRegistro,
  eliminarRegistro
} = require("./consultas");

const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + `/public/index.html`));
});

app.get("/posts", async (req, res) => {
  const posts = await obtenerRegistros();
  res.json(posts);
});

app.post("/posts", async (req, res) => {
  try {
    const { titulo, img, descripcion } = req.body;
    console.log("test1", img);
    await agregarRegistro(titulo, img, descripcion);
    console.log("test2", img);
    res.send("post agregado exitosamente");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al agregar el post");
  }
});

app.put("/posts/like/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await modificarRegistro(id);
    res.status(200).send("Likes actualizados con éxito");
  } catch (err) {
    res.status(500).send("Error al actualizar los likes");
    console.error(err);
  }
});

app.delete("/posts/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await eliminarRegistro(id);
    res.status(200).send("Registro eliminado con éxito");
  } catch (err) {
    res.status(500).send("Error al eliminar el registro");
    console.error(err);
  }
});


app.listen(port, console.log(`SERVIDOR ENCENDIDO EN EL PUERTO ${port}`));
