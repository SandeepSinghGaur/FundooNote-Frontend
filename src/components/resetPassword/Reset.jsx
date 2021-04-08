import React from 'react';
import './Reset.scss';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import MetaTags from 'react-meta-tags';
function Reset() {

    return (
        <div>
            <MetaTags><meta name="viewport" content="width=device-width, initial-scale=1.0"/></MetaTags>
            <div className="mainBox-Reset">
                <div className="app_name" variant="h5" >
                    <span style={{ color: "#0606f8" }}>F</span>
                    <span style={{ color: "#d10303" }}>u</span>
                    <span style={{ color: "#f0b000" }}>n</span>
                    <span style={{ color: "#0606f8" }}>d</span>
                    <span style={{ color: "green" }}>o</span>
                    <span style={{ color: "#d10303" }}>o</span>
                </div>
                <div className="resetPass">
                    <div>Reset Password</div>
                </div>
                <div className="labelName-Reset1">New Password</div>
                <TextField
                    required
                    id="filled-required-Reset"
                    defaultValue=" "
                    variant="filled"

                />
                <div className="labelName-Reset">Confirm Password</div>
                <TextField
                    required
                    id="filled-required-Reset"
                    defaultValue=" "
                    variant="filled"
                />
                <div className="space"></div>
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