import React, {useState, useEffect, useRef} from 'react';


function ContactForm(props) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [mail, setMail] = useState('');

    

    //Submissão do Botão

    const handleSubmit = event => {
        event.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            name: name, 
            phone: phone,
            mail: mail
        });

        setName('')
        setPhone('')
        setMail('')
    }
    
    return (

        <form className='form-fields'onSubmit={handleSubmit}>
            {props.edit ? (
                <div className='editing-form' >
                    <h5>Edite seus Dados: </h5>
                <input 
                type='text'
                placeholder='Edite o seu nome: '
                value={name} 
                name = 'usuario'
                className='nameUsuario'
                onChange={(event)=>setName(event.target.value)}
                
            />

            <input
                type= 'text'
                placeholder='Edite seu telefone: '
                value={phone}
                name='phone'
                onChange={(event)=>setPhone(event.target.value)}
              
            />

            <input
                type= 'text'
                placeholder='Edite seu e-mail: '
                value={mail}
                name='mail'
                onChange={(event)=>setMail(event.target.value)}
                
            />
            
            <button className='submit-edit-button'>Editar!</button>
            </div>
            ) : (
                <>
                <input 
                type='text'
                placeholder='Digite o seu nome: '
                value={name} 
                name = 'usuario'
                className='nameUsuario'
                onChange={(event)=>setName(event.target.value)}
                
            />

            <input
                type= 'text'
                placeholder='Digite seu número de telefone: '
                value={phone}
                name='phone'
                onChange={(event)=>setPhone(event.target.value)}
              
            />

            <input
                type= 'text'
                placeholder='Digite seu e-mail: '
                value={mail}
                name='mail'
                onChange={(event)=>setMail(event.target.value)}
                
            />
            
            <button className='submit-button'>Enviar!!</button>
            </>
            )
            }
        </form>

    );
}

export default ContactForm;
