import './Login.scss'
//import Services from '../../Services/userServices'
import { Link, useHistory } from 'react-router-dom';
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import userServices from '../../Services/userServices';




const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
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
    marginTop: theme.spacing(2),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));
const services = new userServices();
export default function Login() {
  let history=useHistory();
  const classes = useStyles();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleLogin = (e) => {
    e.stopPropagation()
    let data = {
      email: email,
      password: password,
    };
   login(data);
   history.push("/")
  };
  const login=(data)=>{
    services.SignIn(data)
    .then((data) => {
      localStorage.setItem("token",data.data.data);
      localStorage.getItem("token");

    })
    .catch((err) => {
      console.log("Error", err);
    });
  }
    
  

  return (
    <div className="login-main-container">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography className="app_name1" variant="h3" color="textSecondary">
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
          <div className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
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
              onChange={(e) => setPassword(e.target.value)}
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
              onClick={(e) => handleLogin(e)}
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
          </div>
        </div>
      </Container>
    </div>
  );
}