const { Pool, Client } = require("pg");

const credenciales = {
  host: "localhost",
  user: "postgres",
  password: "root",
  database: "likeme",
  allowExitOnIdle: true,
};

const pool = new Pool(credenciales);

const agregarRegistro = async (titulo, img, descripcion) => {
    const consulta = "INSERT INTO posts VALUES (DEFAULT, $1, $2, 0, $3)";
    const values = [titulo, img, descripcion];
    const result = await pool.query(consulta, values);
    console.log("Registro agregado", result);
    return result
  };

const obtenerRegistros = async () => {
    const {rows} = await pool.query("SELECT * FROM posts")
    console.log(rows)
    return rows
}

module.exports = {agregarRegistro, obtenerRegistros}