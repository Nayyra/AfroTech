import fav from '../../imagens/suit-heart-fill.svg'
import perfil from '../../imagens/perfil.svg'
import styled from 'styled-components'

const Icone = styled.li`
    margin-right: 2.5rem;
    width: 1.563rem;
`

const Icones = styled.ul`
    display: flex;
    align-items: center;

        @media (max-width: 768px) {
        display: none;
    }
`

const icones = [perfil]

function IconesHeader() {
    return (
        <Icones>
            { icones.map( (icone) => (
              <Icone><img src={icone}></img></Icone>
            )) }
        </Icones>
    )
}

export default IconesHeader