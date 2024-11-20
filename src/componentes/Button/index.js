import styled from "styled-components"

const Botao = styled.button`
    background-color: #ff005b;
    color: #FFF;
    padding: 0.625rem 0;
    font-size: 1rem;
    border: none;
    font-weight: 56.25rem;
    display: block;
    text-align: center;
    width: 9.375rem;

    &:hover {
        cursor: pointer;
    }
`

function Button(){
   return (
      <Botao>Saiba mais</Botao>
   )
}

export default Button