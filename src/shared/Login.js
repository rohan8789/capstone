import React, {useContext, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { validate } from '../utility/validators';
import axios from 'axios';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import './Auth.css';
import LoadingSpinner from './LoadingSpinner';
import { AuthContext } from '../context/auth-context';

const Login = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLoginForm((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    setFormError((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  

  const sendRequest = async ()=>{
    setIsLoading(true);
    try{
      const res = await axios.post(`https://capstone-server-inde.onrender.com/api/users/login`, {
        email:loginForm.email,
        password:loginForm.password
      });
      setIsLoading(false);
      console.log(res);
      auth.login(res?.data?.userId, res?.data?.token, "public");
      toast.success(`Welcome ${res?.data?.name}`);
      navigate('/about');
    }catch(err){
      console.log(err);
      toast.error(err?.response?.data?.message);
      setIsLoading(false);
    }
  }
  

  const submitHandler = (e) => {
    e.preventDefault();
    let x = validate(loginForm);
    setFormError({
      email: x.email,
      password: x.password,
    });
    if (x.email === "" && x.password === "") {
      sendRequest();
    } else {
      x.email = "";
      x.password = "";
    }
  };
  return (
    <>
      {isLoading && <LoadingSpinner className="container-2" />}
      {!isLoading && (
        <form
          className="place-form mt-3 mb-3 mx-auto p-5 rounded-2 border"
          onSubmit={submitHandler}
          style={{ maxWidth: "500px" }}
        >
          <h1 className="text-center">Login</h1>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email-Id:
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={loginForm.email}
              className="form-control"
              placeholder="Enter your email-id"
            />
            {formError.email && (
              <p className="text-danger">{formError.email}</p>
            )}
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={loginForm.password}
              className="form-control"
              placeholder="Enter your password"
            />
            {formError.password && (
              <p className="text-danger">{formError.password}</p>
            )}
          </div>

          <div className="d-flex justify-content-between mb-3">
            <a href="#" className="link-primary">
              Forgot Password?
            </a>
          </div>

          <div >
            <button type="submit" className="btn btn-primary">
              Login
            </button>
          </div>
        </form>
      )}
    </>
  );
}


export default Login;
