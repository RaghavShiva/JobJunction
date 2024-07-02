import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import InputFrom from '../components/shared/inputform'


const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            console.log(email, password)
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <>
            <div className='login' onSubmit={handleSubmit}>
                <form className='card p-2' >
                    <img src='/assets/logo.png' alt='logo'
                        height={150}
                        width={400} />

                    <InputFrom
                        htmlFor="email"
                        labelText={"Email"}
                        type={"email"}
                        value={email}
                        handleChange={(e) => setEmail(e.target.value)}
                        name="email"
                    />
                    <InputFrom
                        htmlFor="password"
                        labelText={"Password"}
                        type={"password"}
                        value={password}
                        handleChange={(e) => setPassword(e.target.value)}
                        name="password"
                    />
                    <div className='d-flex justify-content-between'>
                        <p>
                            New User <Link to='/register'>Register here</Link>{' '}
                        </p>
                        <button type="submit" className="btn btn-primary">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default LoginPage