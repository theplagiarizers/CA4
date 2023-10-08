const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
// Middleware
app.use(bodyParser.json());

// MySQL database configuration
const dbConfig = {
  host: 'app-mysql', // MySQL container hostname
  user: 'root',
  port:'3306',
  password: 'root',
  database: 'nodeDB'
};

// Create MySQL connection pool
const pool = mysql.createPool(dbConfig);
const parentDir = path.join(__dirname, '..');
// Specify the file path relative to the parent directory
const filePath = path.join(parentDir, 'web', 'frontend', "src", 'index.js');

app.get('/', function(req, res) {
  res.sendFile(filePath, {});
});

// Process the form data
app.post('/process', (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  console.log(`POST request received`);

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
      const query = 'INSERT INTO your_table (name, email) VALUES (?, ?)';
      connection.query(query, [name, email], (error, results) => {
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