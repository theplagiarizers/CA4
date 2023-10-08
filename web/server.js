const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const path = require('path');
// Middleware
app.use(bodyParser.json());

// MySQL database configuration
const dbConfig = {
  host: 'db', // MySQL container hostname
  user: 'myuser',
  port: '3306',
  password: 'mypassword',
  database: 'mydatabase'
};

// Create MySQL connection pool
const pool = mysql.createPool(dbConfig);
const parentDir = path.dirname(__dirname);
// Specify the file path relative to the parent directory
const filePath = path.join('app', 'web', 'frontend', "src", 'index.js');

app.get('/', function(req, res) {
  // Print current working directory on browser
  res.send(`Current working directory: ${__dirname}`);
  res.sendFile(filePath, {});
});

// Process the form data
app.post('/register', (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  const email = req.body.email;
  console.log(`User registration request received`);

  // Create a MySQL connection from the pool
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
      });
    } else {
      // Execute the MySQL query to insert the data
      const query = 'INSERT INTO your_table (UserName, NOTES, email, password) VALUES (?, ?, ?, ?);';
      connection.query(query, [name, "Initial Note", email, password], (error, results) => {
        connection.release(); // Release the connection back to the pool

        if (error) {
          console.error('Error executing MySQL query:', error);
          res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
          });
        } else {
          res.status(200).json({
            status: 'success',
            message: 'Data stored successfully!'
          });
          //Print user stored successfully
          console.log(`User ${name} stored successfully!`);
        }
      });
    }
  });
});

app.post('/login', (req, res) => {
  const name = req.body.name;
  const password = req.body.password;
  console.log(`User login request received`);

  // Create a MySQL connection from the pool
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error getting MySQL connection:', err);
      res.status(500).json({
        status: 'error',
        message: 'Internal Server Error'
      });
    } else {
      // Execute the MySQL query to insert the data
      const query = 'SELECT * FROM your_table WHERE UserName = ? AND password = ?;';
      connection.query(query, [name, password], (error, results) => {
        connection.release(); // Release the connection back to the pool

        if (error) {
          console.error('Error executing MySQL query:', error);
          res.status(500).json({
            status: 'error',
            message: 'Internal Server Error'
          });
        } else {
          // Check if the user exists
          if (results.length > 0) {
            res.status(200).json({
              status: 'success',
              message: 'User logged in successfully!'
            });
            //Print user logged in successfully
            console.log(`User ${name} logged in successfully!`);
          } else {
            res.status(200).json({
              status: 'error',
              message: 'Invalid username or password!'
            });
            //Print invalid username or password
            console.log(`Invalid username or password!`);
          }
        }
      });
    }
  });
});
// Start the server
const port = 8000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});