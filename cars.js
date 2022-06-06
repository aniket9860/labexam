const express = require("express");
const utils = require("../utils");
const db = require("../db");

const router = express.Router();

router.post("/add", (request, response) => {
  const { id, name, model, price, carColor } = request.body;
  const statement = `INSERT into carTB(id,name,model,price,carColor) VALUES(?,?,?,?,?)`;

  db.pool.query(
    statement,
    [id, name, model, price, carColor],
    (error, data) => {
      response.send(utils.createResult(error, data));
    }
  );
});

router.get("/get", (request, response) => {
  const statement = `SELECT * FROM carTB `;

  db.pool.query(statement, (error, data) => {
    response.send(utils.createResult(error, data));
  });
});

router.delete("/delete/:id",(request,response)=>{
  const {id} = request.params
  const statement = `DELETE FROM carTB WHERE id= ?`

  db.pool.query(statement,[id],(error,data)=>{
    response.send(utils.createResult(error,data));
  })
})

module.exports = router