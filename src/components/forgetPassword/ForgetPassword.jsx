// import React from 'react';
// import TextField from '@material-ui/core/TextField';
 import './ForgetPassword.scss';

// function ForgetPassword() {
//     return (
//         <div className="mainBox-forgetpassword-inside">
//             <div className="mainBox-Forget">
                
//                  <div className="app_name" variant="h5" color="textSecondary">
//              <span style={{ color: "#0606f8" }}>F</span>
//              <span style={{ color: "#d10303" }}>u</span>
//              <span style={{ color: "#f0b000" }}>n</span>
//              <span style={{ color: "#0606f8" }}>d</span>
//              <span style={{ color: "green" }}>o</span>
//              <span style={{ color: "#d10303" }}>o</span>
//            </div>
//                 <div className="account-Recovery">
//                     <div>Account recovery</div>
//                 </div>
//                 <div className="useAccount-Forget">
//                     <div>Recover your Fundoo Account</div>
//                 </div>
               
//                 <TextField
//                 placeholder="Email"
//                     required
//                     id="filled-required-Forget"
//                     defaultValue=" "
//                     variant="filled"
//                 />
//                 <div className="create-Account">
//                    <div className="forget-Email">Forget email</div>
//                     <button type="button">Next</button>
//                 </div>
//             </div>
//         </div>
//     )
// }
// export default ForgetPassword;
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
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
    <div className="mainBox-Forget">
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
          Account Recovery
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
            Next
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
    </div>
  );
}