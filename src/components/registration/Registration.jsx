import React from 'react';
import GoogleLogo from './../..//assests/google-2015.svg';
import RegisterLogo from './../..//assests/RegisterLogo.svg';
import './Registration.scss';
import TextField from '@material-ui/core/TextField';

function Registration() {
    return (
        <div>
            <div className="mainBox1">
                <div className="mainLogo">
                    <img src={GoogleLogo} alt='Google-Logo' />
                </div>
                <div className="desc-Account">
                    <div>Create Your Fundoo Account</div>
                </div><br></br>
                <div className="userInfoLogo">
                    <img src={RegisterLogo} alt='Register-Logo' />
                </div>
                <form className="userInfo" autoComplete="off">
                    <TextField id="outlined-basic1" label="First Name" InputProps={{ disableUnderline: true }} />
                    <TextField id="outlined-basic2" label="Last Name" InputProps={{ disableUnderline: true }} />
                    <TextField id="outlined-basic3" label="User Email" InputProps={{ disableUnderline: true }} />

                </form>
                <div className="a">
                    <div>You can use letters,numbers & periods</div>
                </div><br></br>
                <div className="create-Account1">
                    Use my current email address instead
                </div>
                <form className="userInf" autoComplete="on">
                    <TextField id="outlined-basic4" label="Password" InputProps={{ disableUnderline: true }} />
                    <TextField id="outlined-basic5" label="Confirm" InputProps={{ disableUnderline: true }} />
                </form>
                <div className="a">
                    Use 8 or more character with a mix of letters,numbers & symbols.
                </div>
                <div className="inputCheckBox">
                    <input type="checkBox" ></input>show password
                </div><br></br><br></br>
                <div className="create-Account">
                    sign in instead
                    <button type="button">Next</button>
                </div>
            </div>
        </div>

    )
}
export default Registration;
