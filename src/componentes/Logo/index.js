import logo from '../../imagens/logo.png'
import styled from 'styled-components'

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`

const LogoImage = styled.img`
    margin-right: 10px;
`

function Logo() {
    return (
        <LogoContainer>
            <LogoImage
                src={logo}
                alt='logo' 
                width='90px'
                height='90px'
            />
            <p><strong>Afro</strong>
            Tech</p>
       </LogoContainer>
    )
}

export default Logo