import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'

const HeaderContainer = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;

    /* Ajustes para Samsung (≤ 360px) */
    @media (max-width: 360px) {
        flex-direction: column; /* Ajusta o layout para empilhar os elementos */
        padding: 0.5rem; /* Adiciona espaçamento interno */
    }

    /* Ajustes para Xiaomi e iPhones (≤ 414px) */
    @media (max-width: 414px) {
        flex-wrap: wrap; /* Permite que os elementos quebrem linhas, se necessário */
        padding: 1rem;
    }
`;
function Header() {
    return (
        <HeaderContainer>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderContainer>
    )
}

export default Header