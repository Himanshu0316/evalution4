import styled from "styled-components";

export const Grid = styled.div`
width:1000px;
display: grid;
    grid-template-columns: repeat(2,400px);
    grid-gap: 50px;
    margin:auto;
`;

export const Select = styled.select`

`;

export const Flex = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`;
