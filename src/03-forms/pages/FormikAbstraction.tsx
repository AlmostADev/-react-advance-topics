import { Form, Formik } from 'formik'
import * as Yup from 'yup';
import { MyCheckbox, MySelect, MyTextInput } from '../components'
import '../styles/styles.css'

export const FormikAbstraction = () => {
  return (
    <div>
      <h1>Formik Abstraction</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          terms: false,
          jobType: ''
        }}
        onSubmit={values => {
          console.log(values)
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          lastName: Yup.string()
            .max(15, 'Debe de tener 10 caracteres o menos')
            .required('Requerido'),
          email: Yup.string()
            .email("Correo inválido")
            .required('Requerido'),
          terms: Yup.boolean()
            .oneOf([true], 'You must accept terms and conditions'),
          jobType: Yup.string()
            .notOneOf(['it-jr'], 'This action is not allowed')
            .required('Requerido')
        })}
      >
        {(fomik) => (
          <Form>
            <MyTextInput
              label='First Name'
              name='firstName'
              placeholder='First Name'
              type='text'
            />

            <MyTextInput
              label='Last Name'
              name='lastName'
              placeholder='Last Name'
              type='text'
            />

            <MyTextInput
              label='Email Address'
              name='email'
              placeholder='youremail@gmail.com'
              type='email'
            />

            <MySelect label='Job Type' name='jobType' >
              <option value="">Pick something...</option>
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="it-senior">IT Senior</option>
              <option value="it-jr">IT Junior</option>
            </MySelect>

            <MyCheckbox
              label='Terms & Conditions'
              name='terms'
            />

            <button type="submit">Create</button>
          </Form>
        )}
      </Formik>
    </div>
  )
}