import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputFrom from '../components/shared/inputform'
import { useDispatch } from 'react-redux'
import { hideLoading, showLoading } from '../redux/features/alertSlice'
import axios from 'axios'

const Register = () => {
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    //hooks
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            if (!name || !lastName || !email || !password) {
                return alert('please provide all fields')
            }
            dispatch(showLoading())
            const { data } = await axios.post('/api/v1/auth/register', { name, lastName, email, password })
            dispatch(hideLoading())
            if (data.success) {
                alert('register successfully')
                navigate('/dashboard')
            }
        } catch (error) {
            dispatch(hideLoading())
            alert('invalid, try again')
            console.log(error)
        }
    }


    return (
        <>
            <div className='register' onSubmit={handleSubmit}>
                <form className='card p-2' >
                    <img src='/assets/logo.png' alt='logo'
                        height={150}
                        width={400} />
                    <InputFrom
                        htmlFor="name"
                        labelText={"Name"}
                        type={"text"}
                        value={name}
                        handleChange={(e) => setName(e.target.value)}
                        name="name"
                    />
                    <InputFrom
                        htmlFor="lastName"
                        labelText={"Last Name"}
                        type={"text"}
                        value={lastName}
                        handleChange={(e) => setLastName(e.target.value)}
                        name="lastName"
                    />
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