import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputFrom from '../components/shared/inputform'
import { useDispatch, useSelector } from 'react-redux'
import axios from 'axios'
import Spinner from '../components/shared/spinner'
import { hideLoading, showLoading } from '../redux/features/alertSlice'
import {toast} from 'react-toastify'

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    //redux 
    const { loading } = useSelector(state => state.alerts)
    //hooks
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            dispatch(showLoading())
            const { data } = await axios.post('/api/v1/auth/login', { email, password })
            if (data.success) {
                dispatch(hideLoading())
                localStorage.setItem('token', data.token)
                toast.success('login successfully')
                navigate('/dashboard')
            }
        } catch (error) {
            dispatch(hideLoading())
            toast.error('invalid credentials, try again')
            console.log(error)
        }
    }
    return (
        <>
            {loading ? (<Spinner />) : (
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
            )}
        </>
    )
}

export default LoginPage