import styled from 'styled-components';
import { Link } from 'react-router-dom'

// using destructured props with styled components. Setting background with turnery arrow function.

export const Button = styled(Link)`
    background: ${({ primary }) => (primary ? '#000d1a' : 'CD853F' )};
    white-space:nowrap;
    outline:none;
    border:none;
    min-width:100px;
    max-width:200px;
    cursor:pointer;
    text-decoration:none;
    trasition: 0.3s;
    display:flex;
    justify-content:center;
    align-items:center;
    padding: ${({ large }) => (large ? '16px 40px' : '14px 24px')};
    color: ${({ primary }) => (primary ? '#fff' : '#000d1a' )};
    font-size:${({large}) =>(large? '20px' : '14px' )};

    &:hover {
        transform:translateY(-2px);
    }
`;



