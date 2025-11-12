// import React from 'react';
import { ConcursoProvider } from './context/ConcursoContext';
import ConcursoDisplay from './components/ConcursoDisplay';
import styled from 'styled-components';

const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  padding: 50px 0px;
  heigth: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function App() {
  return (
    <ConcursoProvider>
      <Container>
        <ConcursoDisplay />
      </Container>
    </ConcursoProvider>
  );
}
