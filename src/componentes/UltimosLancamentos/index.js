import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../imagens/gladys.jpg' 
import imagemLivro2 from '../../imagens/Annie_Easley_in_NASA_cropped_1-1-e1644604962541.jpg' 
import imagemLivro3 from '../../imagens/KimberlyBryant_01327e-copy-2.jpg' 
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 1.25rem;
    display: flex;
    flex-direction: column;

    @media (max-width: 1284px) and (max-height: 731px) {
        padding-bottom: 1rem;
    }

    @media (max-width: 768px) {
        padding-bottom: 0.75rem;
    }

    @media (max-width: 480px) {
        padding-bottom: 0.5rem;
    }
`;

const NovosLivrosContainer = styled.div`
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;

    @media (max-width: 1284px) and (max-height: 731px) {
        margin-top: 2.5rem;
        margin-bottom: 2.5rem;
    }

    @media (max-width: 768px) {
        flex-wrap: wrap;
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    @media (max-width: 480px) {
        flex-direction: column;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
    }
`;

const Img = styled.img`
    padding: 1rem;
    background-color: #FFF;
    box-shadow: 0px 0.25rem 0.25rem rgba(0, 0, 0, 0.25);
    margin: 2.5rem 1rem;
    border-radius: 0.625rem;

    @media (max-width: 1284px) and (max-height: 731px) {
        margin: 2rem 0.9rem;
        padding: 0.9rem;
    }

    @media (max-width: 768px) {
        margin: 2rem 0.75rem;
        padding: 0.75rem;
    }

    @media (max-width: 480px) {
        margin: 1.5rem 0.5rem;
        padding: 0.5rem;
        box-shadow: 0px 0.125rem 0.125rem rgba(0, 0, 0, 0.2);
    }
`;


function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo
                cor="#ff005b"
                tamanhoFonte="36px"
            >
                LIVROS ESCRITOS POR MULHERES NEGRAS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map( livro => (
                    <Img
                    src={livro.src}
                    width='170px'
                    height='230px'
                    />
                ))}
            </NovosLivrosContainer>

            <containerRecomenda>
            <Titulo
                cor="#ff005b"
                tamanhoFonte="36px"
            >
                TECNOLOGIA
            </Titulo>
                    <CardRecomenda
                        titulo="Talvez você se interesse por"
                        subtitulo="Gladys West"
                        contribuicao="Criadora do GPS"
                        descricao="Gladys West é uma matemática americana cuja modelagem matemática foi fundamental para criar o sistema de posicionamento global (GPS).
        "
                        img={imagemLivro}
                    />

                        <CardRecomenda
                        titulo="Talvez você se interesse por"
                        subtitulo="Annie Easley"
                        contribuicao=" Desenvolvimento do software para motores espaciais"
                        descricao="Cientista da computação e matemática, Annie trabalhou na NASA em programas computacionais para sistemas de propulsão híbridos, usados em foguetes. Foi uma pioneira no uso de computadores para cálculos em projetos aeroespaciais."
                        img={imagemLivro2}
                    />

                    <CardRecomenda
                        titulo="Talvez você se interesse por"
                        subtitulo="Kimberly Bryant"
                        contribuicao="Fundadora da Black Girls Code"
                        descricao="Kimberly é uma engenheira elétrica que fundou o Black Girls Code, uma organização que ensina meninas negras a programar.Sua iniciativa tem empoderado jovens de comunidades sub-representadas a entrar no mundo da tecnologia."
                        img={imagemLivro3}
                />

            </containerRecomenda>
        </UltimosLancamentosContainer>
    )
}

export default UltimosLancamentos