import { Grid } from '@mui/material';
import React from 'react'
import Banner from '../banner/banner';

//Toasts
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import toast, { Toaster } from 'react-hot-toast';


import Categories from './Categories';
import Posts from './post/Posts'

const Home = () => {

  //checking if page is loaded for the first time.

  // var firstTime = localStorage.getItem("first_time");
  // console.log(firstTime)
  // if(!firstTime) {
  //     // first time loaded!
  //     localStorage.setItem("first_time","1");
  // }
  // else{
  //   console.log('afhdfhkdjfh')
  //   toast.success('Successss!');  

  // }



  return (
  <>
    <Banner/>
    <Grid container>
      <Grid item lg={2} xs={8} sm={12}>
        <Categories/>
      </Grid>
      <Grid container item xs={12} sm={12} lg={10}>
      <Posts/>
      </Grid>
    </Grid>
  </>
   
  
  )
}

export default Home;