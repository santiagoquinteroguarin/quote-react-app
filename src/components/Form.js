import React, { useState } from 'react';
import styled from '@emotion/styled';
// ?13.
import { getDifferenceYear, calculateBrand, getPlan } from '../helpers';

// ?2.
const Field = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

// ?3.
const Label = styled.label`
    flex: 0 0 100px;
`;

// ?4. 
const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    /* remover apariencia y darle estilos */
    --webkit-appearance: none;
`;

// ?5. 
const InputRadio = styled.input`
    margin: 0 1rem;
`;

// ?6.
const Button = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    transition: background-color .3s ease;
    margin-top: 2rem;

    /* 7. sass */
    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

// ?13.
const Error = styled.div`
    background-color: red;
    color: #fff;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`;

// ?1.
const Form = ({setSavedSummary, setSavedLoading}) => {

    // ?8. 
    const [data, setSAvedData] = useState({
        marca: '',
        year: '',
        plan: '',
    });

    // ?12. 
    const [error, setSavedError] = useState(false);

    // ?9.
    const { marca, year, plan } = data;

    // ?11. read the data of form and place then in the state
    const getInformation = e => {
        setSAvedData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    // ?12. when user click in submit button
    const handleQuote = e => {
        e.preventDefault();

        if(marca.trim() === '' || year.trim() === '' || plan.trim() === '') {
            setSavedError(true);
            return;
        }

        setSavedError(false);

        // base
        let result = 2000;

        // ?13. obtener la diferencia entre años
        const difference = getDifferenceYear(year);

        // ?14. por cada año hay que restar el 3%
        result -= (( difference * 3) * result) / 100;

        /* 
            Americano: 15%
            Asiatico: 5%
            Europeo: 30%    
        */
        result = calculateBrand(marca) * result;

        // ?16. Basico aumenta 20%
        // Completo 50%
        const incrementPlan = getPlan(plan);
        result = parseFloat(incrementPlan * result).toFixed(2);
        
        setSavedLoading(true);

        setTimeout(() => {
            // Elimina spinner
            setSavedLoading(false);

            // ?17. Total - pasa la info al componente principal
            setSavedSummary({
                quote: Number(result),
                data
            })
        }, 4000);
        
    }

    return (
        <form onSubmit={handleQuote}>

            {error ? <Error>Todos los campos son obligatorios</Error> : null}

            <Field>
                <Label>Marca</Label>
                <Select
                    // ?10.
                    name="marca"
                    value={marca}
                    onChange={getInformation}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="americano">Americano</option>
                    <option value="europeo">Europeo</option>
                    <option value="asiatico">Asiatico</option>
                </Select>
            </Field>
            
            <Field>
                <Label>Año</Label>
                <Select
                    // ?10.
                    name="year"
                    value={year}
                    // ?11.
                    onChange={getInformation}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>

            <Field>
                <Label>Plan</Label>
                <InputRadio 
                    type="radio"
                    name="plan"
                    value="basico"
                    // ?10.
                    checked={plan === 'basico'}
                    // ?11.
                    onChange={getInformation}
                /> Básico

                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    // ?10.
                    checked={plan === 'completo'}
                    // ?11.
                    onChange={getInformation}
                /> Completo
            </Field>

            <Button
                type="submit"
            >Cotizar</Button>
        </form>
    );
}

export default Form;