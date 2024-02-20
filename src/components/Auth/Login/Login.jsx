import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./login.css";
import { useColorMode } from '@chakra-ui/react';
import { Box, Button, Heading, Input } from '@chakra-ui/react';
import Cookies from 'js-cookie';
import Aos from "aos";
import "aos/dist/aos.css";
import { useDispatch } from 'react-redux';
import { login } from '../../../redux/actions/userAction';
import { toast } from 'react-toastify';
import { toastDisplay } from '../../Profile/UpdateProfile';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const submitHandler = async (e) => {
    e.preventDefault();
    const response = await dispatch(login(email, password));

    if (response) {
      if (response.type === "user/loginFail") {
        toast.error(response.payload, toastDisplay);
        response.payload = " ";
      }
      if (response.type === "user/loginSuccess") {
        toast.success(response.payload.message, toastDisplay);
        response.payload.message = " ";
        const expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 7);
        Cookies.set('userToken', response.payload.token, { expires: expirationDate });
      }
    }
  };

  const { colorMode } = useColorMode();
  const container2 = colorMode === 'dark' ? 'container2-dark' : 'container2-light';

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <section data-aos="fade-up" className="login">
      <div className="container">
        <div className="container1">
          <div className={container2}>
            <div data-aos="fade-down" className="content">
              <Heading className='heading'>Welcome to CourseBundler</Heading><br />
              <form onSubmit={submitHandler} >
                <Input
                  required
                  id="email"
                  className={"login-input"}
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="ash@gmail.com"
                  type={"email"}
                  focusBorderColor='yellow.500'
                  autoComplete="off"
                />
                <br />
                <Input
                  required
                  className="login-input"
                  id="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="ashpro@123"
                  type={"password"}
                  focusBorderColor='yellow.500'
                  autoComplete="off"
                /><br />

                <Box className="forgotBox">
                  <Link to="/forgotpassword">
                    <Button variant="link">
                      Forgot Password?
                    </Button>
                  </Link>
                </Box>

                <br />
                <Button type="submit" className='login-btn' colorScheme={"yellow"}>
                  <span>Login</span>
                </Button>
                <br />
                <Box className="login-box" mt="4">
                  Don't have an account?{" "}
                  <Link to="/register">
                    <Button colorScheme={"yellow"} variant="link">
                      Sign Up
                    </Button>
                  </Link>
                </Box>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
