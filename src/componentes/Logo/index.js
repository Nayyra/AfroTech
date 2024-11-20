import logo from '../../imagens/logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 1.875rem;
`

const LogoImage = styled.img`
    margin-right: 0.625rem;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo' 
                width='5.625rem'
                height='5.625rem'
            />
            <p><strong>Afro</strong>
            Tech</p>
       </LogoContainer>
    )
}

export default Logo