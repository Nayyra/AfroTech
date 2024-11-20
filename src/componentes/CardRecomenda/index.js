import styled from "styled-components"
import { Titulo } from "../Titulo"
import Button from "../Button"

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0rem 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    border-radius: 0.625rem;
    display: flex;
    margin: 0 auto;
    max-width: 37.5rem;
    padding: 1.563rem 1.25rem;
    justify-content: space-around;
    width: 100%;
    margin-top: 2rem;  

        @media (max-width: 768px) {
        align-items: center;
        width: 75%;
    }
`
const Descricao = styled.p`
    max-width: 18.75rem;
`

const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 1.125rem;
    font-weight: bold;
    margin: 0.938rem 0;
`

const Contribuicao = styled.h5`

`

const ImgLivro = styled.img`
    width: 9.375rem;
`

function CardRecomenda({titulo, subtitulo, descricao, img, contribuicao}) {
    return (
        <Card>
            <div>
                <Titulo tamanhoFonte="1rem" cor="#ff005b" alinhamento="left">{titulo}</Titulo>
                <Subtitulo>{subtitulo}</Subtitulo>
                <Contribuicao>{contribuicao}</Contribuicao>
                <Descricao>{descricao}</Descricao>
            </div>
            <div>
                <ImgLivro src={img}/>
                <Button />
            </div>
        </Card>  
    )
}

export default CardRecomenda