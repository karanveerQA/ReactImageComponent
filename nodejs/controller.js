const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
  port: process.env.DB_PORT,
});

connection.connect((err) => {
  if (err) {
    console.log(err.message);
    return;
  }
  console.log("db" + connection.state);
});

exports.getTechnologyDataFromDB = (req, res) => {
  const query = "Select * from images";

  connection.query(query, (err, result) => {
    if (err) {
      res.send(err.message);
    } else {
      res.json({ data: result });
    }
  });
};

exports.updateLikeCountInDB = (req, res) => {
  const { id, likeCount } = req.body;

  const query = `update images set likeCount=${likeCount + 1} where id=${id}`;

  connection.query(query, (err, result) => {
    if (err) {
      res.json({ success: false });
    } else {
      res.json({ success: true });
    }
  });
};

exports.updateDislikeCountInDB = (req, res) => {
  const { id, dislikeCount } = req.body;

  const query = `update images set dislikeCount=${
    dislikeCount + 1
  } where id=${id}`;

  connection.query(query, (err, result) => {
    if (err) {
      res.send(err.message);
    } else {
      res.json({ success: true });
    }
  });
};
