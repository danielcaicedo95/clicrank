import React from 'react';
import { Form, Field } from 'react-final-form';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  website?: string;
  country: string;
  countryCode: string;
}

const countries = ["Selecciona un país", "Argentina", "México", "España", "Chile"];

const ContactForm = () => {
  const onSubmit = (values: FormValues) => {
    console.log(values);
  };

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};

    if (values.phone && (values.phone.length < 9 || values.phone.length > 14)) {
      errors.phone = 'El número de teléfono debe tener entre 9 y 14 dígitos';
    }

    return errors;
  };

  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <Field name="name" component="input" type="text" placeholder="Nombre" />
          <div>
            <label>País:</label>
            <Field name="country" component="select">
              {countries.map((country, index) => (
                <option key={index} value={country}>{country}</option>
              ))}
            </Field>
          </div>
          <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
            <label>Indicativo del país:</label>
            <Field name="countryCode" component="input" type="text" placeholder="Indicativo" />
            <label>Número de teléfono:</label>
            <Field name="phone" component="input" type="text" placeholder="Número de teléfono" />
          </div>
          <Field name="email" component="input" type="email" placeholder="Email" />
          <Field name="website" component="input" type="text" placeholder="Sitio web (opcional)" />
          <div className="buttons">
            <button type="submit" disabled={submitting || pristine}>
              Enviar formulario
            </button>
            <button
              type="button"
              onClick={() => form.reset()}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>
        </form>
      )}
    />
  );
};

export default ContactForm;
