import React from 'react';

// ?1.
import styled from '@emotion/styled';

// ?2.
const ContainerHeader = styled.header`
    background-color: #26C6DA;
    padding: 10px;
    font-weight: bold;
    color: #FFFFFF;
`;

const TextHeader = styled.h1`
    font-size: 2rem;
    margin: 0;
    font-family: 'Slabo 27px', serif;
    text-align: center;
`;

const Header = ({titleHeader}) => {
    return (
        // ?3.
        <ContainerHeader>
            <TextHeader>{titleHeader}</TextHeader>
        </ContainerHeader>
    );
}

export default Header;