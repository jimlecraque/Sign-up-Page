import emailI from './static/e-mail.png'
import { Link } from 'react-router-dom'
import googleI from './static/google.png'
import { BrowserRouter } from 'react-router-dom'
export default function SignUpForm2()
{
    return(

        <form action="">
            <h1>Sign Up</h1>
            <p>Join us now! Sign up to kick-start your journey.</p>
            <button type="submit">
                        <img src={googleI} alt="Google icon"/>
                        <span>Sign up with Google</span>
                        
            </button>
            <button type="submit">
                <img src={emailI} alt="email logo" />
                <span>Sign up with Email</span>
            </button>
            <p>
                        Already have an account? <Link to="/">Log in</Link> 
            </p>
        </form>
    )
}