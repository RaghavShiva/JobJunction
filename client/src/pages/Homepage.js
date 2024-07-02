import React from 'react'
import { Link } from "react-router-dom";
import '../styles/homepage.css'
const HomePage = () => {
    return (
        <>
            <video autoPlay muted loop id="bgVideo">
                <source src="/assets/bg.mp4" type="video/mp4" />
            </video>
            <div className="content">
                <div className="card w-25">
                    <img src="/assets/logo.png" alt="logo" />
                    <hr />
                    <div className="card-body"
                        style={{ marginTop: "-60px" }}>
                        <h5 className="card-title">
                            India's No #1 Job Portal App</h5>
                        <p className="card-text">
                            Search and manage your jobs with ease.
                            Free and Open source job portal application
                        </p>
                        <div className="d-flex justify-content-between mt-5">
                            <p>
                                New User Register <Link to="/register">Here !</Link>{" "}
                            </p>
                            <p>
                                <Link to="/login" className="myBtn">
                                    Login
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default HomePage