import styled from "styled-components"
import { Titulo } from "../Titulo"
import Button from "../Button"

const Card = styled.div`
    align-items: center;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 10px;
    display: flex;
    margin: 0 auto;
    max-width: 600px;
    padding: 25px 20px;
    justify-content: space-around;
    width: 100%;
    margin-top: 2rem;  
`
const Descricao = styled.p`
    max-width: 300px;
`

const Subtitulo = styled.h4`
    color: #002F52;
    font-size: 18px;
    font-weight: bold;
    margin: 15px 0;
`

const Contribuicao = styled.h5`

`

const ImgLivro = styled.img`
    width: 150px;
`

function CardRecomenda({titulo, subtitulo, descricao, img, contribuicao}) {
    return (
        <Card>
            <div>
                <Titulo tamanhoFonte="16px" cor="#ff005b" alinhamento="left">{titulo}</Titulo>
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