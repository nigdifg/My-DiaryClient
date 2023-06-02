import { API } from '../../service/api';
import React, { useState,useContext} from 'react';
// import BackGround from '../../assests/BackGround.jpg';
import { TextField, Box, Button, Typography, styled} from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataContext } from '../../context/DataProvider';
import { useNavigate } from 'react-router-dom';



const Wallpaper = styled(Box)`
// background: url(https://imgur.com/G2gSOgr.jpg) no-repeat center center fixed;
background: url(https://imgur.com/oxWbUU0.jpg) no-repeat center center fixed;
    background-size: cover;
    width: 100%;
    height: 100%;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
`;

const Component = styled(Box)`
    margin-left: 55%;
    // margin-left: auto;

    width: 500px;
    height: 765px;
    // margin: auto;
    // box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6);
`;

const Image = styled('img')({
    width: 450,
    display: 'cover',
    margin: 'auto',
    height: '400px'

});

const Wrapper = styled(Box)`
    padding: 0 25px;
    display: flex;
    flex: 1;
    overflow: auto;
    flex-direction: column;
    & > div, & > button, & > p {
        margin-top: 15px;
    }
`;
const LoginButton = styled(Button)`
    text-transform: none;
    background: #FB641B;
    color: #fff;
    height: 48px;
    border-radius: 2px;
`;

const SignupButton = styled(Button)`
    text-transform: none;
    background: #fff;
    color: #2874f0;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;
const Text = styled(Typography)`
    color: #878787;
    font-size: 12px;
`;
const Error = styled(Typography)`
    font-size: 10px;
    color: #ff6161;
    line-height: 0;
    margin-top: 10px;
    font-weight: 600;
`;

const loginInitialValues={
    username: "",
    password:""
}
const signupInitialValues = {
    name: '',
    username: '',
    password: '',
};



const Login = ({isUserAuthenticated}) => {
    // const [toastDisplay, setToastDisplay] = useState(false);

    const [error, setError] = useState('');
    const [account, toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);   
    const [login,setLogin] = useState(loginInitialValues);
    
    // const imageURL = 'https://www.pngitem.com/pimgs/m/750-7508135_my-poetry-hd-png-download.png';
    // const imageURL = 'https://imgur.com/t0Dr7Ui.gif';
    const imageURL = 'https://imgur.com/tLdGhgC.gif';

    const { setAccount } = useContext(DataContext);
    const navigate = useNavigate();
    const toggleSignup = () => {
        account === 'signup' ? toggleAccount('login') : toggleAccount('signup');
    }
   
    const onInputChange = (e) => {
        setSignup({ ...signup, [e.target.name]: e.target.value });
    }

    const onValueChange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });

    }

    const signupUser = async () => {
        let response = await API.userSignup(signup);
        if (response.isSuccess) {
          setError("");
          setSignup(signupInitialValues);
          toggleAccount("login");
        } else {
          setError("User already exists!");
          toast.error("User already exists!");
        }
      };
    // const signupUser = async() => {
    // let response = await API.userSignup(signup);
    //     if (response.isSuccess) {
    //         setError('');
    //         setSignup(signupInitialValues);
    //         toggleAccount('login');
    //     } else {
    //         toast.error('');
    //         setError('Something went wrong! please try again later');
    //     }
    // }
    const loginUser = async () => {
        try {
          let response = await API.userLogin(login);
      
          if (response.isSuccess) {
            setError("");
            sessionStorage.setItem(
              "accessToken",
              `Bearer ${response.data.accessToken}`
            );
            sessionStorage.setItem(
              "refreshToken",
              `Bearer${response.data.refreshToken}`
            );
            setAccount({
              username: response.data.username,
              name: response.data.name,
            });
            isUserAuthenticated(true);
            toast.success("Login Success", {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "dark",
            });
            setTimeout(() => {
              navigate("/");
            }, 1500);
          } else {
            setError(response.message);
            toast.error("Login Failed!");
          }
        } catch (error) {
          console.log(error);
          setError("Something went wrong! please try again later in login");
          toast.error("Login Failed!");
        }
      };

    // const loginUser = async () => {
    //    let response = await API.userLogin(login);
      

    //     if(response.isSuccess){
    //         setError('');
    //         sessionStorage.setItem('accessToken',`Bearer ${response.data.accessToken}`);
    //         sessionStorage.setItem('refreshToken',`Bearer${response.data.refreshToken}`);
    //         setAccount({username:response.data.username ,name:response.data.name });
    //         isUserAuthenticated(true);
    //         if(!isUserAuthenticated){
    //             console.log('jajfj');
    //             setError('Something went wrong! please try again later in longin');
    //             toast.error('Login Failed!')
                
    //         }
    //         else
    //         {
    //             toast.success('Login Success', {
    //                 position: "top-right",
    //                 autoClose: 5000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //                 theme: "dark"
    //                 });
    //             setTimeout(()=>{
    //                 navigate('/')
    //             },1500)
    //         }
            
            
    //     // else
    //     // {
    //     //     console.log('not res success');
    //     //     setError('Something went wrong! please try again later in longin');
    //     //     toast.error('Login Failed!')
    //     // }
    //    }
       
    // }
 
  return (
    <>
    <ToastContainer/>
<Wallpaper>
    <Component >
    <Box style={{marginTop: 90}}>
        <Image src={imageURL} alt="blog" />
        {
            account === 'login' ?
                <Wrapper>
                    <TextField variant="standard" value = {login.username} onChange={(e) => onValueChange(e)} name='username'  label='Enter Username' />
                    <TextField variant="standard" value= {login.password} onChange={(e) => onValueChange(e)} name='password' type='password'  label='Enter Password' />
                    
                    {error && <Error>{error}</Error>}
                    
                   
                    <LoginButton onClick={()=> loginUser()} variant="contained">Login</LoginButton>
                   
                   
                   
                    <Text style={{ textAlign: 'center' }}>OR</Text>
                    <SignupButton onClick={() => toggleSignup()} style={{ marginBottom: 50 }}>Create an account</SignupButton>
                </Wrapper> 
                :
                <Wrapper>
                    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='name'   placeholder='Enter Name' />
                    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='username'  placeholder='Enter Email' />
                    <TextField variant="standard" onChange={(e) => onInputChange(e)} name='password' type='password'   placeholder='Enter Password' />
                        {error && <Error>{error}</Error>}
                    <SignupButton onClick={()=>signupUser()} >Signup</SignupButton>
                    <Text style={{ textAlign: 'center' }}>OR</Text>
                    <LoginButton variant="contained" onClick={() => toggleSignup()}>Already have an account</LoginButton>
                </Wrapper>
        }
    </Box>
</Component>
</Wallpaper>
</>
  )
}
export default Login;