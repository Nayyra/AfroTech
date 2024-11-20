import { livros } from './dadosUltimosLancamentos'
import { Titulo } from '../Titulo'
import CardRecomenda from '../CardRecomenda'
import imagemLivro from '../../imagens/gladys.jpg' 
import imagemLivro2 from '../../imagens/Annie_Easley_in_NASA_cropped_1-1-e1644604962541.jpg' 
import imagemLivro3 from '../../imagens/KimberlyBryant_01327e-copy-2.jpg' 
import styled from 'styled-components'

const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 3rem;
    margin-bottom: 3rem;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;

`

const Img = styled.img`
    padding: 1rem;
    background-color: #FFF;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 2.5rem 1rem;
    border-radius: 10px;
`
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
                    width='190px'
                    height='250px'
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