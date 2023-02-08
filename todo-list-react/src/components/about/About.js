import React, { useId } from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../ui/buttons/Button';

const About = () => {
  const { articles } = useParams();

  const navigate = useNavigate();
  const id = useId();

  const contactFormSchema = Yup.object().shape({
    lastname: Yup.string().required('Le champ est requis!'),
    firstname: Yup.string().required('Le champ est requis!'),
    email: Yup.string()
      .email()
      .required("Format de l'email n'est pas valide!")
      .required('Le champ est requis!'),

    message: Yup.string().max(50, 'Le message est trop long!'),
  });

  const handleSubmitForm = values => {
    alert('Le formulaire a bien été envoyé!');
  };

  return (
    <div>
      <h2>{articles ? 'Articles' : 'On About page'}</h2>
      <p>Nous contacter ?</p>

      <div>
        <Formik
          initialValues={{
            lastname: '',
            firstname: '',
            email: '',
            message: '',
          }}
          validationSchema={contactFormSchema}
          onSubmit={handleSubmitForm}
        >
          {({ errors, touched }) => (
            <Form>
              <fieldset>
                <div>
                  <label htmlFor={`${id}-lastname`}>Nom : </label>
                  <Field
                    type='text'
                    id={`${id}-lastname`}
                    placeholder='Ex: Becker..'
                    name='lastname'
                  />
                  {errors && touched.lastname && (
                    <div style={{ color: 'red' }}>{errors.lastname}</div>
                  )}
                </div>
                <div>
                  <label htmlFor={`${id}-firstname`}>Prénom : </label>
                  <Field
                    type='text'
                    id={`${id}-firstname`}
                    placeholder='Ex: Jhon..'
                    name='firstname'
                  />
                  {errors && touched.firstname && (
                    <div style={{ color: 'red' }}>{errors.firstname}</div>
                  )}
                </div>

                <div>
                  <label htmlFor={`${id}-email`}>Email : </label>
                  <Field
                    type='email'
                    id={`${id}-email`}
                    placeholder='john.becker@wanadoo.com'
                    name='email'
                  />
                  {errors && touched.email && (
                    <div style={{ color: 'red' }}>{errors.email}</div>
                  )}
                </div>
                <div>
                  <label htmlFor={`${id}-message`}>Message</label>
                  <Field
                    component='textarea'
                    row='5'
                    id={`${id}-message`}
                    name='message'
                    placeholder='Write a story..'
                  />
                  {errors && touched.message && (
                    <div style={{ color: 'red' }}>{errors.message}</div>
                  )}
                </div>
                <button type='submit'>Submit</button>
              </fieldset>
            </Form>
          )}
        </Formik>
      </div>

      <Button onClick={() => navigate('/')}>Home page</Button>
    </div>
  );
};

export default About;
