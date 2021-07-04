const { dbConfig, s3Config, s3Bucket } = require("../config");
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const multer = require("multer");
const aws = require("aws-sdk");
const s3 = new aws.S3(s3Config);

app.use(cors());
app.use(express.json());

const db = mysql.createConnection(dbConfig);
const storage = multer.memoryStorage();
const upload = multer({ storage });

app.post("/create", upload.single("img"), async (req, res) => {
  const { Location: url } = await s3
    .upload({
      Bucket: s3Bucket,
      Body: req.file.buffer,
      Key: req.file.originalname,
      ACL: "public-read",
    })
    .promise();
  const nome = req.body.nome;
  const img = url;
  const valor = req.body.valor;
  const novoValor = req.body.novoValor;

  db.query(
    "SELECT * FROM tenis WHERE img = ? or nome = ?",
    [img, nome],
    (err, result) => {
      if (result.length > 0) {
        res.send({ message: "Tênis já cadastrado" });
      } else {
        db.query(
          "INSERT INTO tenis (nome, img, valorAntigo, valorNovo) VALUES (?,?,?,?)",
          [nome, img, valor, novoValor],
          (err, result) => {
            if (err) {
              console.log(err);
            } else {
              res.send({ message: "Tenis Cadastrado com sucesso!" });
            }
          }
        );
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

  db.query("SELECT * from users where email = ?", [email], (err, result) => {
    if (result.length > 0) {
      res.send({ message: "Usuário já cadastrado" });
    } else {
      db.query(
        "INSERT INTO users (username, userlastname, email, password, confirmpassword) VALUES (?,?,?,?,?)",
        [username, userlastname, email, password, confirmpassword],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Usuário Cadastrado");
          }
        }
      );
    }
  });
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

app.delete("/delete", async (req, res) => {
  const url = req.query.img;
  await s3
    .deleteObject({
      Bucket: s3Bucket,
      Key: url.split("/").pop(),
    })
    .promise();
  id = req.query.id;

  db.query("DELETE FROM tenis WHERE id = ?", [id], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
      console.log(`Produto com id ${id} deletado com sucesso!`);
    }
  });
});

app.listen(3001, () => {
  console.log("E ai babaca, to rodando aqui viu!");
});
