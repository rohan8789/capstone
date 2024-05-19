import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validate } from "../utility/validators";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Auth.css";
import LoadingSpinner from "./LoadingSpinner";

const Registration = () => {
  
  const auth = "";
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState({
    name: "",
    email: "",
    phno:"",
    dob:"",
    password: "",
    repassword: "",
  });
  const [formError, setFormError] = useState({
    name: "",
    email: "",
    phno:"",
    dob:"",
    password: "",
    repassword: "",
  });
  const [isLoading, setIsLoading] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegisterForm((prev) => {
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

  const switchHandle = (e) => {
    e.preventDefault();
    navigate("/login");
    auth.changeToggle();
  };

  const sendRequest = async () => {
    setIsLoading(true);
    try { 
      console.log("i am here");
      const res= await axios.post(`https://capstone-server-inde.onrender.com/api/users/signup`, {
        name:registerForm.name,
        email:registerForm.email,
        dob:registerForm.dob,
        phno:registerForm.phno,
        password:registerForm.password,
        repassword:registerForm.repassword
      });
      toast.success(res?.data?.message)
      console.log("My name is data");
      setIsLoading(false);
      navigate("/");
    } catch (error) {
      toast.error(error?.response?.data?.message);
      setIsLoading(false);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    let x = validate(registerForm);
    setFormError({
      name: x.name,
      email: x.email,
      phno:x.phno,
      dob: x.dob,
      password: x.password,
      repassword: x.repassword,
    });
    if (
      x.name === "" &&
      x.email === "" &&
      x.phno === "" &&
      x.dob === "" &&
      x.password === "" &&
      x.repassword === ""
    ) {
      sendRequest();
    } else {
      x.name = "";
      x.email = "";
      x.phno = "";
      x.dob = "";
      x.password = "";
      x.repassword = "";
    }
  };

  return (
    <>
      {isLoading && <LoadingSpinner className="container-1" />}
      {!isLoading && (
        <form
          className="row mt-2 mx-auto p-4 rounded-2 place-form"
          style={{ maxWidth: "600px" }}
          onSubmit={submitHandler}
        >
          <h1 className="text-center mb-3">Registration</h1>

          <div className="col-md-6 mb-2">
            <label className="form-label" htmlFor="name">
              Name:
            </label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              value={registerForm.name}
              className="form-control"
              placeholder="Enter your name"
            />
            {formError.name && <p className="text-danger">{formError.name}</p>}
          </div>

          <div className="col-md-6 mb-2">
            <label className="form-label" htmlFor="email">
              Email-Id:
            </label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={registerForm.email}
              className="form-control"
              placeholder="Enter your email-id"
            />
            {formError.email && (
              <p className="text-danger">{formError.email}</p>
            )}
          </div>

          <div className="col-md-6 mb-2">
            <label className="form-label" htmlFor="phno">
              Phone No:
            </label>
            <input
              type="tel"
              name="phno"
              onChange={handleChange}
              value={registerForm.phno}
              className="form-control"
              placeholder="Enter your phone number"
            />
            {formError.phno && <p className="text-danger">{formError.phno}</p>}
          </div>

          <div className="col-md-6 mb-2">
            <label className="form-label" htmlFor="dob">
              DOB:
            </label>
            <input
              type="date"
              name="dob"
              onChange={handleChange}
              value={registerForm.dob}
              className="form-control"
            />
            {formError.dob && <p className="text-danger">{formError.dob}</p>}
          </div>

          <div className="col-md-6 mb-2">
            <label className="form-label" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              name="password"
              onChange={handleChange}
              value={registerForm.password}
              className="form-control"
              placeholder="Enter your password"
            />
            {formError.password && (
              <p className="text-danger">{formError.password}</p>
            )}
          </div>

          <div className="col-md-6 mb-2">
            <label className="form-label" htmlFor="repassword">
              Re-password:
            </label>
            <input
              type="password"
              name="repassword"
              onChange={handleChange}
              value={registerForm.repassword}
              className="form-control"
              placeholder="Re-enter your password"
            />
            {formError.repassword && (
              <p className="text-danger">{formError.repassword}</p>
            )}
          </div>

          <div className="col-12 d-flex justify-content-between mb-2">
            <a href="#" className="link-primary">
              Forgot Password?
            </a>
          </div>

          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign In
            </button>
          </div>
        </form>
      )}
    </>
  );
};

export default Registration;
