import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from "react-router-dom";
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from "axios";
import { useState } from 'react';
import CustomAlert  from './alert'; 
import { useDispatch } from 'react-redux';
import { GetUserProfile } from '../Redux store/actions';
import store from '../Redux store/Store'
const theme = createTheme();

export default function SignInPage() {
  const [logininfo,setlogininfo]=useState(['','',false,false]);
  const [alert,setAlert]=useState("");
  const validEmailRegex = new RegExp("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?");
  const handleSubmit = (event) => {
    event.preventDefault();
      };
const navigate = useNavigate();
const dispatch=useDispatch();
  function handleLogIn()
{
  setAlert(<CustomAlert open={true} severity="success" alertText="Connected Successfully!"/>);
  setTimeout(() => {    setAlert(null)  }, 5000);
    navigate("/usersList");
  axios
    .get("/users.json")
    .then(
    (res) =>{
    (res.data.find(e=>(e.email===logininfo[0]&&e.password===logininfo[1])));
    dispatch(GetUserProfile(res.data.find(e=>(e.email===logininfo[0]&&e.password===logininfo[1]))))})
}
  return (
         <Grid container component="main" sx={{display:"flex", height: '100vh',flexGrow:1 }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage:"url(/worker.jpg)",
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        {alert}
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              تسجيل الدخول
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="البريد الإلكتروني"
                name="email"
                autoComplete="email"
                autoFocus
                value={logininfo[0]}
                error={logininfo[2]}
                onChange={e=>{setlogininfo([e.target.value,...logininfo.slice(1,)]);}}
                onBlur={e=>{validEmailRegex.test(logininfo[0])?setlogininfo([logininfo[0],logininfo[1],false,logininfo[3]]):setlogininfo([logininfo[0],logininfo[1],true,logininfo[3]]);}}
               />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="كلمة السر"
                type="password"
                id="password"
                value={logininfo[1]} 
                error={logininfo[3]}        
                autoComplete="current-password"
                onChange={e=>{setlogininfo([logininfo[0],e.target.value,...logininfo.slice(2,)]);}}
                onBlur={e=>{(logininfo[1])?setlogininfo([logininfo[0],logininfo[1],logininfo[2],false]):setlogininfo([logininfo[0],logininfo[1],logininfo[2],true]);}}
               />
              
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={()=>
                {
                  axios
                  .get("/users.json")
                  .then(
                  (res) =>
                  {(res.data.find(e=>(e.email===logininfo[0]&&e.password===logininfo[1])))?
                    handleLogIn()
                       
                :
                  res.data.find(e=>(e.email===logininfo[0]))?setAlert(<CustomAlert open={true} severity="warning" alertText="wrong Password!!"/>):
                  setAlert(<CustomAlert open={true} severity="error" alertText="This user doesn't exist."/>)
                }
                  )
                  .catch((err) => console.log(err));
                }}
              >
                تسجيل الدخول
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    إستعادة كلمة المرور؟
                  </Link>
                </Grid>
                <Grid item>
                  <Link to='/signup'>
                    لا تملك حسابا؟ إشترك الآن؟                 </Link>
                </Grid>
              </Grid>
             
            </Box>
           
          </Box>  
        </Grid>
              </Grid>
     
   
  );
}