import React from 'react';
import TextField from '@material-ui/core/TextField';
import GoogleLogo from './../..//assests/google-2015.svg';
import './Login.scss'
function Login() {
    return (
        <div>
            <div className="mainBox">
                <div className="MainLogo">
                    <img src={GoogleLogo} alt='Google-Logo' />
                </div>
                <div className="signin">
                    <div>Sign in</div>
                </div><br></br>
                <div className="useAccount">
                    <div>Use your Fundoo Account</div>
                </div><br></br>
                <span className="labelName">Email or phone</span>
                <TextField
                    required
                    id="filled-required"
                    defaultValue=" "
                    variant="filled"
                />
                <div class="forgot-email">
                    Forgot email?
                   </div><br></br><br></br>
                <div className="desc">
                    Not your computer? Use Guest mode to sign in privately.<br></br>
                    <p><a href="sandeepgaurdec13@gmail.com">Learn More</a></p>
                </div>
                <div className="create-Account">
                    Create Account
                    <button type="button">Next</button>
                </div>
            </div >
            <div className="footer">
                <div className="inside1">English(United Kingdom)</div>
                <div className="inside">Help</div>
                <div className="inside">Privacy</div>
                <div className="inside">Terms</div>
            </div>
        </div>


    )
}
export default Login;