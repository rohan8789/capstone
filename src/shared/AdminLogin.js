import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { validate } from "../utility/validators";
import { AuthContext } from "../context/auth-context";
import LoadingSpinner from '../shared/LoadingSpinner';

const AdminLogin = () => {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    aadhar: "",
    password: "",
  });
  const [formError, setFormError] = useState({
    aadhar: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState();
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

  const sendRequest = async () =>{
    setIsLoading(true);
    try{
      const res = await axios.post(`https://capstone-server-inde.onrender.com/api/admin/login`, {
        aadhar:loginForm.aadhar,
        password:loginForm.password
      });
      setIsLoading(false);
      
      auth.adm_login(res?.data?.adminId, res?.data?.adminToken, "admin");
      toast.success(`Welcome ${res?.data?.name}`);
      navigate('/admabout');
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
      aadhar: x.aadhar,
      password: x.password,
    });
    if (x.aadhar === "" && x.password === "") {
      sendRequest();
    } else {
      x.aadhar = "";
      x.password = "";
    }
  };
  return (
    <>
    {isLoading && <LoadingSpinner className='container-3'/>}
    {!isLoading && 
    <form className="container p-2 rounded-2 place-form " onSubmit={submitHandler}>
          <h1 className="text-center">Login</h1>
          <div className="row mb-2 d-flex justify-content-center">
            <div className="col-12 col-md-6">
              <label className="form-label" htmlFor="aadhar">
                Aadhar no:
              </label>
              <input
                type="number"
                className="form-control"
                name="aadhar"
                onChange={handleChange}
                value={loginForm.aadhar}
                placeholder="Enter your aadhar no"
              />
              {formError.aadhar ? (
                <p className="text-danger">{formError.aadhar}</p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="row mb-2 d-flex justify-content-center border">
            <div className="col-12 col-md-6">
              <label className="form-label" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChange}
                value={loginForm.password}
                placeholder="Enter your password"
              />
              {formError.password ? (
                <p className="text-danger">{formError.password}</p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="row mb-2 d-flex justify-content-center border ">
            <div className="col-12 col-md-6 d-flex flex-column  justify-content-between">
              <a href="#" className="text-decoration-none">
                Forgot Password?
              </a>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-6">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
              <button onClick={()=>{navigate('/admreg')}} className="btn btn-danger ms-1">
                Admin signup
              </button>
            </div>
          </div>
      </form>
    }
   </>
  );
};

export default AdminLogin;
