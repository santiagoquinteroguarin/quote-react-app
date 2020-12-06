import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
// ?1.
import styled from '@emotion/styled';

// ?2.
const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const ContainerForm = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {
  return (
    // ?3.
    <Container>
      <Header 
        titleHeader="Cotizador de Seguros"
      />
      
      <ContainerForm>
        <Form/>
      </ContainerForm>
    </Container>
  );
}

export default App;
