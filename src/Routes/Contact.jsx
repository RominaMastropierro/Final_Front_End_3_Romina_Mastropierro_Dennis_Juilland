import React from 'react'
import Form from '../Components/Form'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {
  return (
    <div className='Contacto'>
      <h2>Quiere Obtener Mejor Informacion?</h2>
      <hr />
      <p>Llenes los datos y envie la solicitud para que sea atendida:</p>
      <Form/>
    </div>
  )
}

export default Contact;