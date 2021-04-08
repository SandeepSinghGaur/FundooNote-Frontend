import React from 'react';
import TextField from '@material-ui/core/TextField';
import './Login.scss'
import Services from '../../Services/userServices'

const services = new Services();


function Login() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const handleLogin = () => {
        let data = {
            email: email,
            password: password,
        };
        services
            .SignIn(data)
            .then((data) => {
                console.log(data);
                console.log(
                    "Login successful" + JSON.stringify(data.data.result.accessToken)
                );
                localStorage.setItem("loginToken", data.data.result.accessToken);
            })
            .catch((err) => {
                console.log("Error", err);
            });
    };
    return (
        <div className="login-main-container">
            <div className="mainBoxLogin">
                <div className="app_name" variant="h5" >
                    <span style={{ color: "#0606f8" }}>F</span>
                    <span style={{ color: "#d10303" }}>u</span>
                    <span style={{ color: "#f0b000" }}>n</span>
                    <span style={{ color: "#0606f8" }}>d</span>
                    <span style={{ color: "green" }}>o</span>
                    <span style={{ color: "#d10303" }}>o</span>
                </div>
                <div className="signin">
                    <div>Sign in</div>
                </div>
                <div className="useAccount">
                    <div>Use your Fundoo Account</div>
                </div>
                <div className="login-field-div">
                <TextField
                   label="Email"
                    required
                    id="filled-required-Login"
                    defaultValue="email"
                    variant="filled"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </div>
                <div className="login-field-div">
                <TextField
                 label="Password"
                    required
                    id="filled-required-Login"
                    defaultValue=" "
                    variant="filled"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </div>
                <div className="forgot-email-Login">
                    Forgot email?
                   </div>
                <div className="desc-Login">
                    Not your computer? Use Guest mode to sign in privately.<br></br><br></br>
                    <p><a href="sandeepgaurdec13@gmail.com">Learn More</a></p>
                </div>
                <div className="create-Account-Login">
                    Create Account
                    <button onClick={handleLogin} type="button">Next</button>
                </div>
            </div >
            </div>
    
        


    )
}
export default Login;