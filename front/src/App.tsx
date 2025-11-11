// import React from 'react';
import { ConcursoProvider } from './context/ConcursoContext';
import ConcursoDisplay from './components/ConcursoDisplay';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  padding: 24px;
  max-width: 600px;
  margin: 0 auto;
`;

export default function App() {
  return (
    <ConcursoProvider>
      <Container>
        <h1>Mega-Sena — Consulta</h1>
        <ConcursoDisplay />
      </Container>
    </ConcursoProvider>
  );
}
