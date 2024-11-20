import styled from "styled-components"

const Botao = styled.button`
    background-color: #ff005b;
    color: #FFF;
    padding: 10px 0px;
    font-size: 16px;
    border: none;
    font-weight: 900;
    display: block;
    text-align: center;
    width: 150px;

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