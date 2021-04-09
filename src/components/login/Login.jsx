// import React from 'react';
// import TextField from '@material-ui/core/TextField';
 import './Login.scss'
// import Services from '../../Services/userServices'
 import { Link } from 'react-router-dom';

// const services = new Services();


// function Login() {
//     const [email, setEmail] = React.useState("");
//     const [password, setPassword] = React.useState("");
//     const handleLogin = () => {
//         let data = {
//             email: email,
//             password: password,
//         };
//         services
//             .SignIn(data)
//             .then((data) => {
//                 console.log(data);
//                 console.log(
//                     "Login successful" + JSON.stringify(data.data.result.accessToken)
//                 );
//                 localStorage.setItem("loginToken", data.data.result.accessToken);
//             })
//             .catch((err) => {
//                 console.log("Error", err);
//             });
//     };
    
 
    

//     return (
//         <div className="login-main-container">
//             <div className="mainBoxLogin">
//                 <div className="app_name" variant="h5" >
//                     <span style={{ color: "#0606f8" }}>F</span>
//                     <span style={{ color: "#d10303" }}>u</span>
//                     <span style={{ color: "#f0b000" }}>n</span>
//                     <span style={{ color: "#0606f8" }}>d</span>
//                     <span style={{ color: "green" }}>o</span>
//                     <span style={{ color: "#d10303" }}>o</span>
//                 </div>
//                 <div className="signin">
//                     <div>Sign in</div>
//                 </div>
//                 <div className="useAccount">
//                     <div>Use your Fundoo Account</div>
//                 </div>
//                 <div className="login-field-div">
//                 <TextField
//                    label="Email"
//                     required
//                     id="filled-required-Login"
//                     defaultValue="email"
//                     variant="filled"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                 />
//                 </div>
//                 <div className="login-field-div">
//                 <TextField
//                  label="Password"
//                     required
//                     id="filled-required-Login"
//                     defaultValue=" "
//                     variant="filled"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 </div>
//                 <div className="forgot-email-Login">
//                 <Link to="/ForgetPassword">Forget email?</Link>
//                    </div>
//                 <div className="desc-Login">
//                     Not your computer? Use Guest mode to sign in privately.<br></br><br></br>
//                     <p><a href="sandeepgaurdec13@gmail.com">Learn More</a></p>
//                 </div>
//                 <div className="create-Account-Login">
//                    <Link to="/Registration">Create Account</Link>
//                     <button onClick={handleLogin} type="button">Next</button>
//                 </div>
//             </div >
//             </div>
    
        


//     )
//     }

// export default Login;
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
//import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <div className="login-main-container">
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      <Typography className="app_name1" variant="h5" color="textSecondary">
                        <span style={{ color: "#0606f8" }}>F</span>
                        <span style={{ color: "#d10303" }}>u</span>
                        <span style={{ color: "#f0b000" }}>n</span>
                        <span style={{ color: "#0606f8" }}>d</span>
                        <span style={{ color: "green" }}>o</span>
                        <span style={{ color: "#d10303" }}>o</span>
                    </Typography>
                  
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Typography >
                        Use your Fundoo Account
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
          <Grid item xs>
          <Link to="/Registration">Create Account</Link>
              
            </Grid>
            <Grid item >
            <Link to="/ForgetPassword">Forget email?</Link>
            </Grid>
            
          </Grid>
        </form>
      </div>
      
    </Container>
    </div>
  );
}