import styled, { css, keyframes } from "styled-components";

export const List = styled.ul`
    list-style: none;
    margin-top: 20px;

    li {
        padding: 15px 0;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & + li {
            border-top: 2px solid #eee;
        }

        a {
            color: var(--primary-color);
            text-decoration: none;
        }
    }
`;

export const DeleteButton = styled.button.attrs({
    type: 'button'
})`
    border: 0;
    background: transparent;
    color: #e72d2d;
    padding: 8px 7px;
    outline: 0;
    border-radius: 4px;
    vertical-align: middle;
    
    :hover {
        color: var(--primary-color);
        transition: color 0.3s ease;
    }
`;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input{
        flex: 1;
        padding: 10px 15px;
        border-radius: 4px;
        font-size: 17px;
    }
`;

const animate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const SubmitButton = styled.button.attrs({
    type: 'submit',
})`
    background: var(--primary-color);
    border: 0;
    border-radius: 4px;
    margin-left: 10px;
    padding: 0 15px;
    display: flex;
    align-items: center;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.5;
    }
    
    ${props => props.disabled && 
        css`
            svg{
                animation: ${animate} 2s linear infinite;
            }
        `
    }
`;
