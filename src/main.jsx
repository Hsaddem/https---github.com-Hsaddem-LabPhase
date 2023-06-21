import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { arEG } from '@mui/material/locale';
import ErrorPage from './assets/components/404';
import SignInPage from './assets/components/signin';
import { createBrowserRouter,  RouterProvider} from 'react-router-dom';

import SignUp from './assets/components/signup';
import Employers from './assets/components/EmployersList';
import Employees from './assets/components/EmployeesList';
import store from './assets/Redux store/Store'
import { Provider } from 'react-redux'

const theme = createTheme(
  {
    palette: {
      primary: { main: '#1976d2' },
    },
  },
  arEG,
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement:<ErrorPage/>,
   },
    {
      path: "/signin",
      element:<SignInPage/> ,
      errorElement:<ErrorPage/>
    },
    {
      path: "/signup",
      element:<SignUp/> ,
      errorElement:<ErrorPage/>
    }
    ,
    {
      path: "/usersList",
      element:<Employers/> ,
      errorElement:<ErrorPage/>
    },
    {
      path: "/offers",
      element:<Employees/> ,
      errorElement:<ErrorPage/>
    }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
<ThemeProvider theme={theme}>
<RouterProvider router={router} />
</ThemeProvider>
</Provider>
  
);


