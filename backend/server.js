const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'budget_tracker',
});

db.connect((err) => {
  if (err) {
    console.error('MySQL connection error: ' + err.stack);
    return;
  }
  console.log('Connected to MySQL database');
});


app.post('/register', (req, res) => {
  const { username, lastname, email, mobile_number, password } = req.body;

  const sql =
    'INSERT INTO users (username, lastname, email, mobile_number, password) VALUES (?, ?, ?, ?, ?)';
  const values = [username, lastname, email, mobile_number, password];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('MySQL query error: ' + err.stack);
      res.status(500).send('Error occurred while registering.');
    } else {
      console.log('User registered successfully');
      res.status(200).send('Registration successful!');
    }
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
