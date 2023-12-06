import Colaborador from '../Colaborador/Colaborador'
import './Time.css'

const Time = (props) => {

    return (
        // Podemos usar tanto o operador ternário quanto o condição(booleano) && ...codigo
        // props.colaboradores.length > 0
        
        props.colaboradores.length > 0 &&
        <section 
            className='time'
            style={{ backgroundColor: props.corSecundaria }}
        >
            <h3 
                style={{ borderColor: props.corPrimaria }}
            >
                {props.nome}
            </h3>
            <div className='colaboradores'>
                {props.colaboradores.map(colaborador => 
                    <Colaborador 
                        nome={colaborador.nome}
                        cargo={colaborador.cargo}
                        imagem={colaborador.imagem} 
                    />
                )}
            </div>
        </section>
        
    )

}

export default Time