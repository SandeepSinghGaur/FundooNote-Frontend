import React from 'react';
import RegisterLogo from './../..//assests/RegisterLogo.svg';
import './Registration.scss';
import TextField from '@material-ui/core/TextField';

function Registration() {
    return (
        <div className="registration-main">
            <div className="mainBox1">
                
                  <div className="mainLogo" >
             <span style={{ color: "#0606f8"  }}>F</span>
             <span style={{ color: "#d10303" }}>u</span>
             <span style={{ color: "#f0b000" }}>n</span>
             <span style={{ color: "#0606f8" }}>d</span>
             <span style={{ color: "green" }}>o</span>
             <span style={{ color: "#d10303" }}>o</span>
           </div> 
                <div className="desc-Account">
                    <div>Create Your Fundoo Account</div>
                </div>
                <div className="userInfoLogo">
                    <img src={RegisterLogo} alt='Register-Logo' className="register-logo-main"/>
                
                <div className="userInfo">
                    <div className="userInf"> 
                    <TextField id="outlined-basic1" label="First Name" InputProps={{ disableUnderline: true }} />
                    <TextField id="outlined-basic2" label="Last Name" InputProps={{ disableUnderline: true }} />
                    </div>
                    
                    <TextField id="outlined-basic3" label="User Email" InputProps={{ disableUnderline: true }} />
                    <div className="userInf" >
                    <TextField id="outlined-basic4" label="Password" InputProps={{ disableUnderline: true }} />
                    <TextField id="outlined-basic5" label="Confirm" InputProps={{ disableUnderline: true }} />
                </div>
                </div>
                </div>
               
                <div className="a">
                    Use 8 or more character with a mix of letters,numbers & symbols.
                </div>
                <div className="inputCheckBox">
                    <input type="checkBox" ></input>show password
                </div>
                <div className="create-Account">
                    sign in instead
                    <button type="button">Next</button>
                </div>
            </div>
        </div>

    )
}
export default Registration;
