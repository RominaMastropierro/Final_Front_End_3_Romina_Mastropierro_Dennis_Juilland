import React, { useState } from 'react';

const Form = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const validate = () => {
    const newErrors = {};
    if (formData.name.length <= 5) {
      newErrors.name = 'El nombre debe tener más de 5 caracteres';
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Data:', formData);
      setSuccessMessage(`Gracias ${formData.name}, te contactaremos cuanto antes vía mail.`);
      setSubmitted(true);
    }
  };

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Nombre Completo"
        />
        {errors.name && <p>{errors.name}</p>}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        {errors.email && <p>{errors.email}</p>}
        <button type="submit">Enviar</button>
      </form>
      {submitted && <p>{successMessage}</p>} {/* Mensaje de éxito */}
    </div>
  );
};

export default Form;
