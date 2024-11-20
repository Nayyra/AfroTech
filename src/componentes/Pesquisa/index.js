import Input from '../Input'
import styled from 'styled-components'
import { useState } from 'react'
import { livros } from './dadosPesquisa'
import lupa from '../../imagens/search.svg'

const PesquisaContainer = styled.section`
    color: #FFF;
    text-align: center;
    padding: 5.313rem 0;
    height: 26.25rem;
    width: 100%;

    @media (max-width: 768px) {
        padding: 3rem 0;
        height: auto;
    }

    @media (max-width: 480px) {
        padding: 2rem 0;
    }
`;

const Titulo = styled.h2`
    color: #FFF;
    font-size: 2rem;
    text-align: center;
    width: 100%;

    @media (max-width: 768px) {
        font-size: 1.75rem;
    }

    @media (max-width: 480px) {
        font-size: 1.5rem;
    }
`;

const Subtitulo = styled.h3`
    font-size: 1rem;
    font-weight: 500;
    margin-bottom: 2.5rem;

    @media (max-width: 768px) {
        font-size: 0.875rem;
        margin-bottom: 2rem;
    }

    @media (max-width: 480px) {
        font-size: 0.75rem;
        margin-bottom: 1.5rem;
    }
`;

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.25rem;
    cursor: pointer;
    
    p {
        width: 12.5rem;

        @media (max-width: 768px) {
            width: 10rem;
        }

        @media (max-width: 480px) {
            width: 8rem;
        }
    }

    img {
        width: 6.25rem;

        @media (max-width: 768px) {
            width: 5rem;
        }

        @media (max-width: 480px) {
            width: 4rem;
        }
    }

    &:hover {
        background: #220c33;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 0.5rem;
    }
`;

const SerchPesquisa = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
    }
`;


function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([])

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <SerchPesquisa>
            <Input
                placeholder="Escreva sua próxima leitura "
                
                onBlur={evento => {
                    const textoDigitado = evento.target.value
                    const resultadoPesquisa = livros.filter( livro => livro.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultadoPesquisa)
                }}
            />
            </SerchPesquisa>
            { livrosPesquisados.map( livro => (
                <Resultado>
                    <img src={livro.src}/>
                    <p>{livro.nome}</p>
                </Resultado>
            ) ) }
        </PesquisaContainer>
    )
}

export default Pesquisa