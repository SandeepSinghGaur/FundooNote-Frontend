// import React from 'react';
// import RegisterLogo from './../..//assests/RegisterLogo.svg';
import './Registration.scss';
// import TextField from '@material-ui/core/TextField';

// function Registration() {
//     return (
//         <div className="registration-main">
//             <div className="mainBox1">
                
//                   <div className="mainLogo" >
//              <span style={{ color: "#0606f8"  }}>F</span>
//              <span style={{ color: "#d10303" }}>u</span>
//              <span style={{ color: "#f0b000" }}>n</span>
//              <span style={{ color: "#0606f8" }}>d</span>
//              <span style={{ color: "green" }}>o</span>
//              <span style={{ color: "#d10303" }}>o</span>
//            </div> 
//                 <div className="desc-Account">
//                     <div>Create Your Fundoo Account</div>
//                 </div>
//                 <div className="userInfoLogo">
//                     <img src={RegisterLogo} alt='Register-Logo' className="register-logo-main"/>
                
//                 <div className="userInfo">
//                     <div className="userInf"> 
//                     <TextField id="outlined-basic1" label="First Name" InputProps={{ disableUnderline: true }} />
//                     <TextField id="outlined-basic2" label="Last Name" InputProps={{ disableUnderline: true }} />
//                     </div>
                    
//                     <TextField id="outlined-basic3" label="User Email" InputProps={{ disableUnderline: true }} />
//                     <div className="userInf" >
//                     <TextField id="outlined-basic4" label="Password" InputProps={{ disableUnderline: true }} />
//                     <TextField id="outlined-basic5" label="Confirm" InputProps={{ disableUnderline: true }} />
//                 </div>
//                 </div>
//                 </div>
               
//                 <div className="a">
//                     Use 8 or more character with a mix of letters,numbers & symbols.
//                 </div>
//                 <div className="inputCheckBox">
//                     <input type="checkBox" ></input>show password
//                 </div>
//                 <div className="create-Account">
//                     sign in instead
//                     <button type="button">Next</button>
//                 </div>
//             </div>
//         </div>

//     )
// }
// export default Registration;

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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  return (
    <div className="registration-main">
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
        <Typography >
          Create Your Fundoo Account
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Confirm Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label=" Use 8 or more character with a mix of letters,numbers & symbols.."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Next
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
            <Link to="/Login">Don't have an account? Sign Up</Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
    </div>
  );
}
