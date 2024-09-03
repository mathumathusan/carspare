const express = require('express');
const mysql=require('mysql2')
const cors=require('cors');
const app = express();

const routes = require('./routes');

const port = 3000;


app.use(express.json()); 
app.use(cors());


app.use('/api', routes);


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});