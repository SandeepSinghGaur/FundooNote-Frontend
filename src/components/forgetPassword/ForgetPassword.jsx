import React from 'react';
import TextField from '@material-ui/core/TextField';
import './ForgetPassword.scss';

function ForgetPassword() {
    return (
        <div className="mainBox-forgetpassword-inside">
            <div className="mainBox-Forget">
                
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
                </div>
                <div className="useAccount-Forget">
                    <div>Recover your Fundoo Account</div>
                </div>
               
                <TextField
                placeholder="Email"
                    required
                    id="filled-required-Forget"
                    defaultValue=" "
                    variant="filled"
                />
                <div className="create-Account">
                   <div className="forget-Email">Forget email</div>
                    <button type="button">Next</button>
                </div>
            </div>
        </div>
    )
}
export default ForgetPassword;