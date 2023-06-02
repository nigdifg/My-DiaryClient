import './App.css';
import { Box, styled } from '@mui/material';
import { useState } from 'react';
import DetailView from './components/details/DetailView';
import Login from './components/account/Login'
import Home from './components/home/home';
import DataProvider from './context/DataProvider';
import {BrowserRouter, Routes,Route, Navigate, Outlet} from 'react-router-dom';
import Header from './components/header/header';
import CreatePost from './components/create/CreatePost';
import Update from './components/create/Update';
import About from './components/about/About';
import Contact from './components/contact/Contact';
const PrivateRoute = ({isAuthenticated,...props}) =>{
  return isAuthenticated ?
  <>
    <Header/>
    <Outlet/>
  </>
  : <Navigate replace to='/login' />
}

// const Wallpaper = styled(Box)`
// background: url(https://imgur.com/ZVtq2WK.jpg) no-repeat center center fixed;
// background-size: cover;
//     width: 100%;
//     // height: 100%;
//     minHeight: 100%;
//     // box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
//     -webkit-background-size: cover;
//     -moz-background-size: cover;
//     -o-background-size: cover;
//     background-size: cover;
// `;
function App() {

const [isAuthenticated,isUserAuthenticated] = useState(false);

  return (

    // <Wallpaper>
    <DataProvider>
      <BrowserRouter> 
      
        <div style={{ marginTop: 64 }}>   
            <Routes>
            <Route path='/login' element = {<Login isUserAuthenticated={isUserAuthenticated}/>}  />
           
            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/' element = {<Home/>}  />
            </Route>
           
            <Route path='/create' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/create' element = {<CreatePost/>}  />
            </Route>

            <Route path='/details/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/details/:id' element = {<DetailView/>}  />
            </Route>
            
            <Route path='/update/:id' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/update/:id' element = {<Update/>}  />
            </Route>
            <Route path='/about' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/about' element = {<About/>}  />
            </Route>
            <Route path='/contact' element={<PrivateRoute isAuthenticated={isAuthenticated} />} >
              <Route path='/contact' element = {<Contact/>}  />
            </Route>
            </Routes>
        </div>
      </BrowserRouter>  
    </DataProvider>
    // </Wallpaper>

  );
}

export default App;
