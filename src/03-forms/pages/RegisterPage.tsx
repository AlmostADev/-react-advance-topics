import { FormEvent } from 'react'
import { useForm } from '../hooks/useForm'
import '../styles/styles.css'
export const RegisterPage = () => {

    const { formData, handleChange, isValidEmail, resetForm } = useForm({
        name: '',
        email: '',
        password1: '',
        password2: '',
    })

    const { name, email, password1, password2 } = formData

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(formData)
    }

    return (
        <div>
            <h1>RegisterPage</h1>
            <form noValidate onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Name'
                    value={name}
                    onChange={handleChange}
                    name='name'
                    className={`${name.trim().length <= 0 && 'has-error'}`}
                />
                {(name.trim().length <= 0) && <span>Este campo es necesario</span>}
                <input
                    type="email"
                    placeholder='Email'
                    value={email}
                    onChange={handleChange}
                    name='email'
                    className={`${!isValidEmail(email) && 'has-error'}`}
                />
                {!isValidEmail(email) && <span>Email no es válido</span>}
                <input
                    type="password"
                    placeholder='Password'
                    value={password1}
                    onChange={handleChange}
                    name='password1'
                    className='has-error'
                />
                {(password1.trim().length <= 0) && <span>Este campo es necesario</span>}
                {(password1.trim().length < 6) && <span>Este campo debe contener 6 caractéres</span>}
                <input
                    type="password"
                    placeholder='Repeat Password'
                    value={password2}
                    onChange={handleChange}
                    name='password2'
                    className='has-error'
                />
                {(password2.trim().length <= 0) && <span>Este campo es necesario</span>}
                {(password2.trim().length < 6) && <span>Este campo debe contener 6 caractéres</span>}
                {(password1.trim() !== password2.trim()) && <span>Las contraseñas deben coincidir</span>}
                <button type="submit">Create</button>
                <button onClick={resetForm}>Reset Form</button>
            </form>
        </div>

    )
}