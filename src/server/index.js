const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "loja",
});

app.post("/create", (req, res) => {
  const nome = req.body.nome;
  const img = req.body.img;
  const valor = req.body.valor;
  const novoValor = req.body.novoValor;

  db.query(
    "INSERT INTO tenis (nome, img, valorAntigo, valorNovo) VALUES (?,?,?,?)",
    [nome, img, valor, novoValor],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Tenis Cadastrado");
      }
    }
  );
});

app.post("/createUser", (req, res) => {
  const username = req.body.username;
  const userlastname = req.body.userlastname;
  const email = req.body.email;
  const password = req.body.password;
  const confirmpassword = req.body.confirmpassword;

  db.query(
    "INSERT INTO users (username, userlastname, email, password, confirmpassword) VALUES (?,?,?,?,?)",
    [username, userlastname, email, password, confirmpassword],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Tenis Cadastrado");
      }
    }
  );
});

app.get("/tenis", (req, res) => {
  db.query("SELECT * FROM tenis", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/user", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  db.query(
    "SELECT * FROM users where email = ? and password = ?",
    [email, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
      }
      if (result.length > 0) {
        res.send(result);
      } else {
        res.send({ message: "Usuário ou senha inválidos" });
      }
    }
  );
});

app.put("/update", (req, res) => {
  const id = req.query.id;
  const nome = req.body.nome;
  const valorAntigo = req.body.valor;
  const valorNovo = req.body.novoValor;
  db.query(
    "UPDATE tenis SET nome = ?, valorAntigo = ?, valorNovo = ? WHERE id = ?",
    [nome, valorAntigo, valorNovo, id],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    }
  );
});

app.delete("/delete", (req, res) => {
  id = req.query.id;
  console.log(id);

  db.query("DELETE FROM tenis WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("E ai babaca, to rodando aqui viu!");
});
