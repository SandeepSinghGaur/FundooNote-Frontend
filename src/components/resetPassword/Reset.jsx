import React from 'react';
import './Reset.scss';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
function Reset() {

    return (
        <div>
            <div className="mainBox">
                <div className="app_name" variant="h5" >
                    <span style={{ color: "#0606f8" }}>F</span>
                    <span style={{ color: "#d10303" }}>u</span>
                    <span style={{ color: "#f0b000" }}>n</span>
                    <span style={{ color: "#0606f8" }}>d</span>
                    <span style={{ color: "green" }}>o</span>
                    <span style={{ color: "#d10303" }}>o</span>
                </div><br></br><br></br>
                <div className="resetPass">
                    <div>Reset Password</div>
                </div>
                <span className="labelName">New Password</span>
                <TextField
                    required
                    id="filled-required"
                    defaultValue=" "
                    variant="filled"

                /><br></br><br></br>
                <span className="labelName">Confirm Password</span>
                <TextField
                    required
                    id="filled-required"
                    defaultValue=" "
                    variant="filled"
                /><br></br><br></br>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                >Reset Password</Button>
            </div>
        </div>

    )
}
export default Reset;