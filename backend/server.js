const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const dirname = path.resolve();
// console.log(dirname);

app.use(express.static("public"));

const uri = process.env.ATLAS_URI;
console.log(uri);

mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const usersRouter = require('./routes/users');
const dogRouter = require('./routes/dogs');
app.use('/users', usersRouter);
app.use('/dogs', dogRouter);
// app.use(express.static('./frontend/public/'));

app.get('*', (req, res) => res.sendFile(path.join(dirname + "/public/index.html")));

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
