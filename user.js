const express = require("express");
const db = require("../db");
const utils = require("../utils");

const router = express.Router();

router.post("/signin", (request, response) => {
  const { email, password } = request.body;

  const statement = `SELECT * FROM userTB WHERE email = ? AND password=?`;

  db.pool.query(statement, [email, password], (error, user) => {
    const result = {};
    if (error) {
      result["status"] = "error";
      result["error"] = error;
    } else {
      if (user.length === 0) {
        result["status"] = "error";
        result["error"] = "user not exist";
      }else{
        result['status']= 'success'
        result['data'] = user
      }
    }
    response.send(result)
  });
});

module.exports = router