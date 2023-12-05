
import { useState } from 'react'
import Botao from '../Botao/Botao'
import CampoTexto from '../CampoTexto/CampoTexto'
import ListaSuspensa from '../ListaSuspensa/ListaSuspensa'
import './Formulario.css'

const Formulario = (props) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const limpaForm = () => {

        setNome('')
        setCargo('')
        setImagem('')
        setTime('')

    }

    const aoSalvar = (evento) => {

        evento.preventDefault()

        props.aoCadastrar({
            nome,
            cargo,
            imagem,
            time
        })

        limpaForm()

    }

    return (

        <section className='form'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <CampoTexto 
                    label="Imagem" 
                    placeholder="Digiteo endereço da sua 
                    imagem"
                    valor={imagem} 
                    aoAlterado={valor => setImagem(valor)}
                />      
                <ListaSuspensa 
                    obrigatorio={true} 
                    label="Time" 
                    itens={props.times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>

    )

}

export default Formulario