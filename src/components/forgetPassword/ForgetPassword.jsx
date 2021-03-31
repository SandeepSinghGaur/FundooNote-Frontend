import React from 'react';
import TextField from '@material-ui/core/TextField';
import './ForgetPassword.scss';

function ForgetPassword() {
    return (
        <div>
            <div className="mainBox">
                
                 <div className="app_name" variant="h5" color="textSecondary">
             <span style={{ color: "#0606f8" }}>F</span>
             <span style={{ color: "#d10303" }}>u</span>
             <span style={{ color: "#f0b000" }}>n</span>
             <span style={{ color: "#0606f8" }}>d</span>
             <span style={{ color: "green" }}>o</span>
             <span style={{ color: "#d10303" }}>o</span>
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