const db = require("./db");

async function getMultiple() {
  const rows = await db.query(
    `SELECT *
    FROM itens`
  );

  return { rows };
}

async function create(item) {
  const result = await db.query(
    `INSERT INTO itens
      (name, quantity, price, old_price, image_path)
      VALUES
      (?, ?, ?, ?, ?)`,
    [item.name, item.quantity, item.price, item.old_price, item.image_path]
  );

  let message = "Deu merda criando o item";

  if (result.affectedRows) {
    message = "Deu bom criando o item";
  }

  return { message, id: result.insertId };
}

async function update(id, item) {
  const result = await db.query(
    `UPDATE itens 
    SET name=?, quantity=?, price=?, old_price=?, image_path=?
    WHERE item_id=?`,
    [item.name, item.quantity, item.price, item.old_price, item.image_path, id]
  );

  let message = "Deu merda editando o item";

  if (result.affectedRows) {
    message = "Deu bom editando o item";
  }

  return { message };
}

async function remove(id) {
  const result = await db.query(`DELETE FROM itens WHERE item_id=?`, [id]);

  let message = "Deu merda deletando o item";

  if (result.affectedRows) {
    message = "Deu bom deletando o item";
  }

  return { message };
}

module.exports = {
  getMultiple,
  create,
  update,
  remove,
};
