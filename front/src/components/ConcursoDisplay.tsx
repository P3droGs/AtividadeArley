import  { useState } from 'react';
import { useConcurso } from '../context/ConcursoContext';
import styled from 'styled-components';

const Box = styled.div`padding:16px;border:1px solid #ddd;border-radius:8px;`;
const Row = styled.div`margin-bottom:8px;display:flex;gap:8px;align-items:center;`;

export default function ConcursoDisplay() {
  const { concursoAtual, buscarPorNumero, mensagem } = useConcurso();
  const [numero, setNumero] = useState('');

  const onBuscar = () => {
    const n = Number(numero);
    if (isNaN(n)) return alert('Informe um número válido');
    buscarPorNumero(n);
  };

  return (
    <Box>
      <Row>
        <input placeholder="Número do concurso" value={numero} onChange={e => setNumero(e.target.value)} />
        <button onClick={onBuscar}>Buscar</button>
      </Row>

      {mensagem && <p>{mensagem}</p>}

      {concursoAtual ? (
        <div>
          <h2>Concurso {concursoAtual.concurso}</h2>
          <p>Data: {concursoAtual.data_do_sorteio}</p>
          <p>Bolões: {concursoAtual.bola1}, {concursoAtual.bola2}, {concursoAtual.bola3}, {concursoAtual.bola4}, {concursoAtual.bola5}, {concursoAtual.bola6}</p>
        </div>
      ) : (
        !mensagem && <p>Carregando...</p>
      )}
    </Box>
  );
}
