import styled from "styled-components"

const Input = styled.input`
    order: 1px solid #FFF;
    background: transparent;
    border: 1px solid #FFF;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    color: #FFF;
    font-size: 16px;
    margin-bottom: 30px;

    &::placeholder {
        color: #FFF;
        font-size: 16px;
    }
`
const SerchPesquisa = styled.div`
    background-color:#2F4F4F;
    border:solid 1px;
    border-radius:15px;
    width:300px;
`
export default Input
