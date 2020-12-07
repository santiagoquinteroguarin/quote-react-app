import React from 'react';
import styled from '@emotion/styled';
import { firstLetterUppercase } from '../helpers';

const ContainerSummary = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`;

const Summary = ({data}) => {

    const { marca, year, plan } = data;

    if(marca === '' || year === '' || plan === '') {
        return null;
    }

    return (
        <ContainerSummary>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: {firstLetterUppercase(marca)}</li>
                <li>Plan: {firstLetterUppercase(plan)}</li>
                <li>Año del Auto: {year}</li>
            </ul>
        </ContainerSummary>
        
    );
}

export default Summary;