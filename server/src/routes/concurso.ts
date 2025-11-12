import { Router } from 'express';
import { pool } from '../db';

const router = Router();

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM megasena ORDER BY concurso DESC LIMIT 1');
    if (result.rowCount === 0) return res.status(404).json({ message: 'Nenhum concurso encontrado' });
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

router.get('/:numero', async (req, res) => {
  const numero = Number(req.params.numero);
  if (isNaN(numero)) return res.status(400).json({ message: 'Número de concurso inválido' });
  try {
    const result = await pool.query('SELECT * FROM megasena WHERE concurso = $1', [numero]);
    if (result.rowCount === 0) return res.status(404).json({ message: 'Concurso não existe' });
    res.json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erro no servidor' });
  }
});

export default router;
