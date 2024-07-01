import React, { useState } from 'react'
import { Link } from 'react-router-dom'
const Register = () => {
    // const [name, setName] = useState('')
    // const [lastName, setLastName] = useState('')
    // const [email, setEmail] = useState('')
    // const [password, setPassword] = useState('')
    const [values, setValues] = useState({
        name: '',
        lastName: ' ',
        email: ' ',
        password: ' '
    })
    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            console.log(values)
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = (e) => {
        const value = e.target.value
        setValues({
            ...values,
            [e.target.name]: value
        })
    }

    return (
        <>
            <div className='register'>
                <form className='card p-2' onSubmit={handleSubmit}>
                    <img src='/logo192.png' alt='logo'
                        height={300}
                        width={400}></img>
                    <div className="mb-1">
                        <label htmlFor="name" className="form-label">
                            Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-1">
                        <label htmlFor="name" className="form-label">
                            Last Name</label>
                        <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={values.lastName}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="mb-1">
                        <label htmlFor="email" className="form-label">
                            Email Address</label>
                        <input
                            type="email"
                            className="form-control"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                        />

                    </div>

                    <div className="mb-1">
                        <label htmlFor="password" className="form-label">
                            Password</label>
                        <input type="password"
                            className="form-control"
                            name="password"
                            value={values.password}
                            onChange={handleChange}
                        />
                    </div>

                    <div className='d-flex justify-content-between'>
                        <p>
                            Already Registered <Link to='/login'>Login</Link>{' '}
                        </p>
                        <button type="submit" className="btn btn-primary">
                            Register
                        </button>
                    </div>


                </form>
            </div>
        </>
    )
}

export default Register