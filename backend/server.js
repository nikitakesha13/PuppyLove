import express, { json, static } from "express";
import cors from 'cors';
import { connect, connection as _connection } from 'mongoose';

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(json());

const uri = process.env.ATLAS_URI;
console.log(uri);

connect(uri);
const connection = _connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

import usersRouter from './routes/users';
import dogRouter from './routes/dogs';
app.use('/users', usersRouter);
app.use('/dogs', dogRouter);
app.use(static('./frontend/public/'));

app.listen(port, () => {
  console.log(`Server started on port: ${port}`);
});
