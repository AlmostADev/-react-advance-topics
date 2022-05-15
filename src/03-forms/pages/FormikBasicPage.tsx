import { FormikErrors, useFormik } from 'formik'
import '../styles/styles.css'

interface FormValues {
    firstName: string;
    lastName: string;
    email: string;
}

export const FormikBasicPage = () => {

    const validate = ({ firstName, lastName, email }: FormValues) => {
        const errors: FormikErrors<FormValues> = {};

        if (!firstName) errors.firstName = 'Required';
        if (firstName.length >= 15) errors.firstName = 'Must be 15 characters or less';

        if (!lastName) errors.lastName = 'Required';
        if (lastName.length >= 10) errors.lastName = 'Must be 10 characters or less';

        if (!email) errors.email = 'Required';
        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) errors.email = 'Invalid email address';

        return errors;
    }

    const { errors, handleBlur, handleChange, handleSubmit, values, touched } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: ''
        },
        onSubmit: values => {
            console.log(values)
        },
        validate
    });

    return (
        <div>
            <h1>Formik Basic Tutorial</h1>
            <form noValidate onSubmit={handleSubmit}>
                <label htmlFor="firstName">First Name</label>
                <input
                    name='firstName'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder='First Name'
                    type="text"
                    value={values.firstName}
                />
                {touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

                <label htmlFor="lastName">Last Name</label>
                <input
                    name='lastName'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder='Last Name'
                    type="text"
                    value={values.lastName}
                />
                {touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

                <label htmlFor="email">Email Address</label>
                <input
                    name='email'
                    onBlur={handleBlur}
                    onChange={handleChange}
                    placeholder='Email'
                    type="email"
                    value={values.email}
                />
                {touched.email && errors.email && <span>{errors.email}</span>}

                <button type="submit">Create</button>
            </form>
        </div>
    )
}