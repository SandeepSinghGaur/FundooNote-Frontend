import React from 'react';
import TextField from '@material-ui/core/TextField';
import './ForgetPassword.scss';
import GoogleLogo from './../..//assests/google-2015.svg';

function ForgetPassword() {
    return (
        <div>
            <div className="mainBox">
                <div className="MainLogo">
                    <img src={GoogleLogo} alt='Google-Logo' />
                </div>
                <div className="account-Recovery">
                    <div>Account recovery</div>
                </div><br></br>
                <div className="useAccount">
                    <div>Recover your Fundoo Account</div>
                </div><br></br>
                <span className="labelName">Email or phone</span>
                <TextField
                    required
                    id="filled-required"
                    defaultValue=" "
                    variant="filled"
                /><br></br><br></br>
                <div className="create-Account">
                    Forget email
                    <button type="button">Next</button>
                </div>
            </div>
        </div>
    )
}
export default ForgetPassword;