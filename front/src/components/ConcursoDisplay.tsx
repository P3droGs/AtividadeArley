import { useState } from "react";
import { useConcurso } from "../context/ConcursoContext";
import styled from "styled-components";

const Box = styled.div`
  width: 500px;
  padding: 30px 50px;
  border: 1px solid #ddd;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: left;
  justify-content: center;
`;
const BoxData = styled.div`
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  align-items: left;
  justify-content: center;
`;
const Row = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const RowBalls = styled.div`
  display: flex;
  gap: 8px;
  align-items: center;
`;
const Ball = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  background-color: #293ce0ff;
  color: #fff;
  width: 4rem;
  height: 4rem;
`;

export default function ConcursoDisplay() {
  const { concursoAtual, buscarPorNumero, mensagem } = useConcurso();
  const [numero, setNumero] = useState("");

  const formatarData = (dataISO: string) => {
    const data = new Date(dataISO);
    return data.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    });
  };

  // 🔎 Buscar automaticamente ao digitar
  const onChangeNumero = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    setNumero(valor);

    const n = Number(valor);
    if (!isNaN(n) && valor.trim() !== "") {
      buscarPorNumero(n);
    }
  };

  return (
    <Box>

      <input
        placeholder="Número do concurso"
        value={numero}
        onChange={onChangeNumero}
      />

      {mensagem && <p>{mensagem}</p>}

      {concursoAtual ? (
        <BoxData>
          <h1>Mega-Sena - Concurso {concursoAtual.concurso}</h1>
          <Row>
            {/* <button onClick={onBuscar}>Buscar</button> */}
          </Row>
          <RowBalls>
            <Ball>{concursoAtual.bola1}</Ball>
            <Ball>{concursoAtual.bola2}</Ball>
            <Ball>{concursoAtual.bola3}</Ball>
            <Ball>{concursoAtual.bola4}</Ball>
            <Ball>{concursoAtual.bola5}</Ball>
            <Ball>{concursoAtual.bola6}</Ball>
          </RowBalls>
          <p>
            {concursoAtual.data_do_sorteio
              ? formatarData(concursoAtual.data_do_sorteio)
              : "—"}
          </p>
        </BoxData>
      ) : (
        !mensagem && <p>Carregando...</p>
      )}
    </Box>
  );
}
