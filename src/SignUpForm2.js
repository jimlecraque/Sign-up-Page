import emailI from './static/e-mail.png'
import googleI from './static/google.png'
import './signupform2.css'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
export default function SignUpForm2()
{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={
                    <form action="" id='form2'>
                        <h1>Sign Up</h1>
                        <p>Join us now! Sign up to kick-start your journey.</p>
                        <div>
                            <button type="submit">
                                        <img src={googleI} alt="Google icon"/>
                                        <span>Sign up with Google</span>
                                        
                            </button>
                            <button type="submit">
                                <img src={emailI} alt="email logo" />
                                <span>Sign up with Email</span>
                            </button>
                        </div>
                        <p>
                            Already have an account? <Link to="/">Log in</Link> 
                        </p>
                    </form>
                }>

                </Route>
            </Routes>
        </BrowserRouter>   
        
    )
}