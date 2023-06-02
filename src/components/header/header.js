import React from 'react'
import { AppBar,Toolbar,styled} from '@mui/material'
import { Link } from 'react-router-dom';
import {DataContext} from '../../context/DataProvider';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {useNavigate} from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useContext } from 'react';

const Component = styled(AppBar)`
    background: #FFFFFF;
    color: black;
    // position: static;
`;
const Disp = styled(Link)`
    background: #FFFFFF;
    color: black;
    // position: static;
`;




const Container = styled(Toolbar)`
    justify-content: center;
    alignItems: center;
    justifyContent: center;
    & > a {
        margin-left:3rem;
        padding: 20px;
        color: #000;
        text-decoration: none;
    }
`;



const Header = () => {

const navigate = useNavigate();
const handleLogout=()=>{
  toast.error('Loging OUT...!')
  setTimeout(()=>{
    navigate('/login');
  },1500)
    
};
const [anchorEl, setAnchorEl] = React.useState(null);



  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleprofile = () => {
    navigate('/about');
    // setAnchorEl(null);
  };
  const handleClose = () => {
    
    setAnchorEl(null);
  };

  
    // const navigate = useNavigate();

    // const logout = async () => navigate('/account');
    const { account } = useContext(DataContext);
    
    return (
    <Component>
    
  

          <Container variant='contained'>
          
          <Disp to='/' variant="h4"
            component="div"
            sx={{flexGrow: 1 ,
                fontWeight: 800,
                letterSpacing: '.2rem',
                color: 'inherit',
                mr: 2,
                display: { xs: 'none', sm: 'block' } }}
            href='/'>
            Welcome {account.name}
          </Disp>
                <Container >
                <Link to='/'>HOME</Link>
                <Link to='/about'>ABOUT</Link>
                <Link to='/contact'>CONTACT</Link>
                </Container>
                <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleprofile}>My Profile</MenuItem>
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
                <ToastContainer/>
              </Menu>
              </div>
                {/* <Link to='/login'>LOGOUT</Link> */}
        </Container>
    </Component>
  )
}

export default Header;