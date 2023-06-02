import React from 'react'
import { useContext } from 'react';
import {Box,Typography,styled} from '@mui/material';
import {DataContext} from '../../context/DataProvider';

const Image = styled(Box)`
// width: 100%;
// background: url(https://imgur.com/V61Xj9Q.jpg) center/cover no-repeat #000;
// height: 40vh;
// display: flex;
// flex-direction: column;
// align-items: center;
// justify-content: center;   
width: 100%;
background: url(https://imgur.com/V61Xj9Q.jpg) no-repeat;
background-size: cover;
height: 40vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
    
`;

const Heading = styled(Typography)`
    font-size: 70px;
    color: #FFFFFF;
    line-height: 1;
    text-align: left
`;

const SubHeading = styled(Typography)`
    font-size: 20px;
    background: #FFFFFF;
`;



const Banner = () => {
    const { account } = useContext(DataContext);
  return (
    
   <Image>
    <Heading>My Poetry </Heading>
    <SubHeading>Write with me ~{account.name}</SubHeading>
   </Image>
  )
}

export default Banner;