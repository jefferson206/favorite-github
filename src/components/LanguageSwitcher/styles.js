import styled from "styled-components";

export const Container = styled.div`
    max-width: 700px;
    border-radius: 4px;
    margin: 30px auto;
    display: flex;
    justify-content: end;
`;

export const Select = styled.select`
    padding: 10px;
    font-size: 16px;
    border-radius: 4px;
    border: 1px solid #ccc;
    width: 25%;

    &:focus {
        border-color: #007BFF;
    }

    @media (max-width: 540px) {
        width: 100%
    }
`;
