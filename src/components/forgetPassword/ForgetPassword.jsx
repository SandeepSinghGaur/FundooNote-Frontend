
 import './ForgetPassword.scss';
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
import { Link } from 'react-router-dom';
import userServices from '../../Services/userServices';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3,0, 2),
  },
}));
const services = new userServices();
export default function ForgetPassword() {
  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const handleForgetPassword = (e) => {
    e.stopPropagation()
   forget(email);
  };
  const forget=(data)=>{
    services.ForgetPassword(data)
    .then((data) => {
      console.log("Mail Send successfully" + data)
    })
    .catch((err) => {
      console.log("Error", err);
    });
  }

  return (
    <div className="mainBox-Forget">
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
          Account Recovery
        </Typography>
        <Typography >
          Recover your Fundoo Account
        </Typography>
        <div className={classes.form} noValidate>
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
            onChange={(e) => setEmail(e.target.value)}
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
            onClick={(e) => handleForgetPassword(e)}
          >
            Next
          </Button>
          <Grid container>
            <Grid item xs>
            <Link to="/Reset">Forget Password?</Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
    </div>
  );
}