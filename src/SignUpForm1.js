import { useFormik } from "formik"
import React from 'react'
import { Link, BrowserRouter, Routes, Route } from "react-router-dom"
import * as Yup from 'yup'
import googleI from './static/google.png'
import './signupform1.css'
export default function SignUpForm1()
{
   
    const validate = values =>{
        const errors = {}
    }
    const onSubmit= (values)=>
    {
        console.log(values)
    }
    const formik = useFormik(
        {
            initialValues:{
                name:'',
                email:'',
                password:'',
            },
            validate,
            onSubmit:onSubmit,
        }
    )
        return(
            <BrowserRouter>
            <Routes>
              <Route path="/" element={
                <form onSubmit={formik.onSubmit}>
                <fieldset className="first-fieldset">
                    <h1>Sign Up</h1>
                    <p>Join us now! Sign up to kick-start your journey.</p>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="joe@doe.com" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                    <input type="button" value="Sign Up" />
                    <p>
                        Already have an account? <Link to="/">Log in</Link> 
                    </p>
                </fieldset>
                <fieldset className="second-fieldset">
                    <legend>Or</legend>
                    <button type="submit">
                        <img src={googleI} alt="Google icon"/>
                        <span>Sign up with Google</span>
                        
                    </button>
                </fieldset>
            </form>
              }>
              </Route>
            </Routes>
          </BrowserRouter>
            
        )
    }