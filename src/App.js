import React, {useState} from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Summary from './components/Summary';
import Result from './components/Result';
import './components/Spinner.js';
// ?1.
import styled from '@emotion/styled';
import Spinner from './components/Spinner.js';

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

  const [summary, setSavedSummary] = useState({
    quote: 0,
    data: {
      marca: '',
      year: '',
      plan: '',
    }
  });

  const [loading, setSavedLoading] = useState(false);

  const { quote , data } = summary;

  return (
    // ?3.
    <Container>
      <Header 
        titleHeader="Cotizador de Seguros"
      />

      <ContainerForm>
        <Form
          setSavedSummary={setSavedSummary}
          setSavedLoading={setSavedLoading}
        />
        
        {loading ? <Spinner/> : null}

        <Summary
          data={data}
        />

        {!loading ? 
          <Result 
            quote={quote}
          /> : null
        }
        
      </ContainerForm>
    </Container>
  );
}

export default App;
