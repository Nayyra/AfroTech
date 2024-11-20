import styled from 'styled-components'

const Opcao = styled.li`
    font-size: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 0.313rem;
    cursor: pointer;
    min-width: 7.5rem;
`

const Opcoes = styled.ul`
    display: flex;

    @media (max-width: 768px) {
        display: none;
    }
`;

const textoOpcoes = ['HOME' , 'AUTORAS', 'TECNOLOGIA']

function OpcoesHeader() {
    return (
        <Opcoes>
            { textoOpcoes.map( (texto) => (
                <Opcao><p>{texto}</p></Opcao>
            ) ) }
      </Opcoes>
    )
}

export default OpcoesHeader