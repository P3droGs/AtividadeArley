import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { pool } from './db';
import concursoRouter from './routes/concurso';

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/", concursoRouter);

const port = process.env.SERVER_PORT || 4000;
app.listen(port, () => {
  console.log(`Server rodando na porta ${port}`);
});
