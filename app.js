import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import indexRouter from './src/routes/index.route.js';
import { info } from "./src/logger/logger.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  info(`Example app listening on port ${PORT}!`);
  console.log(`Example app listening on port ${PORT}!`);
});

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/api', indexRouter);

app.use((req, res, next) => {
  info(JSON.stringify({ status: 404, message: `No existe el recurso solicitado ${req.originalUrl}` }));
  res.status(404).json({ status: 404, message: "No existe el recurso solicitado" });
});

app.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ status: err.statusCode, error: err.message });
});

export default app;
