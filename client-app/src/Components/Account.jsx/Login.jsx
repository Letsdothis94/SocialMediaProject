import { HttpStatusCode } from 'axios';
import { React, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import http from '../Utils.jsx/http'

function Register() {

    let navigate = useNavigate()
    const [userDetails, setUserDetails] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserDetails((prev) => {
            return { ...prev, [name]: value };
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data } = await http.post("/login", userDetails)
        //change storage to cookies
        localStorage.setItem("token", JSON.stringify(data))
        navigate('/') 
        console.log(data)
    }


    return (
        <div style={{ border: '2px solid purple', borderRadius: '3%', marginTop: '8vh' }}>
            <h1>Log in</h1>
            <hr />
            <div>
                <form onSubmit={handleSubmit}>
                    <input type='text' placeholder='Email Address' name='email' onChange={handleChange}></input><br />
                    <input type='password' placeholder='Password' name='password' onChange={handleChange}></input><br />
                    <button>Log in</button>
                    <h3>Don't have an account? Register now! <Link to='/register'>Create account</Link></h3>
                </form>
            </div>
        </div>
    )
}

export default Register