import { useFormik } from "formik"
import React from 'react'
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
            <form onSubmit={formik.onSubmit}>
                <fieldset>
                    <h1>Sign Up</h1>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" id="name" />
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" placeholder="joe@doe.com" />
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                    <input type="button" value="Sign Up" />
                    <p>
                        Already have an account? 
                    </p>
                </fieldset>
                <fieldset className="second-fieldset">
                    <legend>Or</legend>
                    <button type="submit">
                        <img src={googleI} alt="Google icon"/>
                        Sign up with Google
                    </button>
                </fieldset>
            </form>
        )
    }