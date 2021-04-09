// import React from 'react';
import './Reset.scss';
// import TextField from "@material-ui/core/TextField";
// import Button from "@material-ui/core/Button";
// import MetaTags from 'react-meta-tags';
// function Reset() {

//     return (
//         <div>
//             <MetaTags><meta name="viewport" content="width=device-width, initial-scale=1.0"/></MetaTags>
//             <div className="mainBox-Reset">
//                 <div className="app_name" variant="h5" >
//                     <span style={{ color: "#0606f8" }}>F</span>
//                     <span style={{ color: "#d10303" }}>u</span>
//                     <span style={{ color: "#f0b000" }}>n</span>
//                     <span style={{ color: "#0606f8" }}>d</span>
//                     <span style={{ color: "green" }}>o</span>
//                     <span style={{ color: "#d10303" }}>o</span>
//                 </div>
//                 <div className="resetPass">
//                     <div>Reset Password</div>
//                 </div>
//                 <div className="labelName-Reset1">New Password</div>
//                 <TextField
//                     required
//                     id="filled-required-Reset"
//                     defaultValue=" "
//                     variant="filled"

//                 />
//                 <div className="labelName-Reset">Confirm Password</div>
//                 <TextField
//                     required
//                     id="filled-required-Reset"
//                     defaultValue=" "
//                     variant="filled"
//                 />
//                 <div className="space"></div>
//                 <Button
//                     type="submit"
//                     variant="contained"
//                     color="primary"
//                 >Reset Password</Button>
//             </div>
//         </div>

//     )
// }
// export default Reset;
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
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
        <div className="mainBox-Reset">
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
                        Reset Password
        </Typography>




                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="New Password"
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
                            label=" Confirm Password"
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
                            Reset Password
          </Button>

                    </form>
                </div>


            </Container>
        </div>
    );
}