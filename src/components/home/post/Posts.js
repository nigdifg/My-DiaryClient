
import { useEffect, useState } from 'react';
import {API} from '../../../service/api';
import { Box, Card, Grid } from '@mui/material';
import { useSearchParams,Link} from 'react-router-dom';
import Post from './Post';
import '../../../assests/style.css'
import { style } from '@mui/system';
const Posts = () => {

  const [posts,setPosts] = useState([]);
  const [searachParams] = useSearchParams();
  const category = searachParams.get('category');
  useEffect(() =>{
    const fetchData = async() =>{
       let response = await API.getAllPosts({category: category || '' });
       if(response.isSuccess){
        setPosts(response.data);
       }
    }
    fetchData();

  },[category])


  return (
    <>
        {
          posts && posts.length > 0 ? posts.map(post =>(
                <Grid className='glass' item lg={3} sm={6} xs={12}>
                

                 
                  <Link  to={`details/${post._id}`} style={{textDecoration:'none',color:'inherit' }} >
                 
                  <Post post = {post} />
                  
                  </Link>
                
                </Grid>
          
          
                )): <Box style={{color:'#878787',margin:'30px 80px',fontSize:18}}>No data availabe to display</Box>  
        }
    </>
  )
}

export default Posts;