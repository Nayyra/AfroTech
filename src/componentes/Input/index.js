import styled from "styled-components"

const Input = styled.input`
    order: 0.063rem solid #FFF;
    background: transparent;
    border: 0.063rem solid #FFF;
    padding: 1.25rem 8.75rem;
    border-radius: 3.125rem;
    width: 12.5rem;
    color: #FFF;
    font-size: 1rem;
    margin-bottom: 1.875rem;

    &::placeholder {
        color: #FFF;
        font-size: 1rem;
    }
`
const SerchPesquisa = styled.div`
    background-color:#2F4F4F;
    border:solid 0.063;
    border-radius:  0.938rem;
    width: 18.75rem;
`
export default Input
