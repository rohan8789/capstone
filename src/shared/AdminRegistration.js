import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { validate } from "../utility/validators";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./Auth.css";
import LoadingSpinner from "./LoadingSpinner";

const AdminRegistration = () => {
  const auth = "";
  const navigate = useNavigate();
  const [registerForm, setRegisterForm] = useState({
    name: "",
    aadhar: "",
    password: "",
    repassword: "",
  });
  const [formError, setFormError] = useState({
    name: "",
    aadhar: "",
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

  const sendRequest = async () => {
    
    setIsLoading(true);
    try {
      console.log("i am here");
      const res = await axios.post(`http://localhost:5000/api/admin/signup`, {
        name: registerForm.name,
        aadhar: registerForm.aadhar,
        password: registerForm.password,
        repassword: registerForm.repassword,
      });
      toast.success(res?.data?.message);
      console.log("My name is data");
      setIsLoading(false);
      navigate("/admlogin");
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
      aadhar: x.aadhar,
      password: x.password,
      repassword: x.repassword,
    });
    if (
      x.name === "" &&
      x.aadhar === "" &&
      x.password === "" &&
      x.repassword === ""
    ) {
      sendRequest();
    } else {
      x.name = "";
      x.aadhar = "";
      x.password = "";
      x.repassword = "";
    }
  };

  return (
    <>
      {isLoading && <LoadingSpinner className="container-1" />}
      {!isLoading && (
        <form
          className="container p-2 rounded-2 place-form border border-black"
          onSubmit={submitHandler}
        >
          <h1 className="text-center">Registration</h1>

          <div className="row mb-2 d-flex justify-content-center ">
            <div className="col-12 col-md-6">
              <label className="form-label" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={handleChange}
                value={registerForm.name}
                placeholder="Enter your name"
              />
              {formError.name ? (
                <p className="text-danger">{formError.name}</p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="row mb-2 d-flex justify-content-center">
            <div className="col-12 col-md-6">
              <label className="form-label" htmlFor="aadhar">
                Aadhar No:
              </label>
              <input
                type="number"
                className="form-control"
                name="aadhar"
                onChange={handleChange}
                value={registerForm.aadhar}
                placeholder="Enter your email"
              />
              {formError.aadhar ? (
                <p className="text-danger">{formError.aadhar}</p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="row mb-2 d-flex justify-content-center">
            <div className="col-12 col-md-6">
              <label className="form-label" htmlFor="password">
                Password:
              </label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChange}
                value={registerForm.password}
                placeholder="Enter your password"
              />
              {formError.password ? (
                <p className="text-danger">{formError.password}</p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="row mb-2 d-flex justify-content-center">
            <div className="col-12 col-md-6">
              <label className="form-label" htmlFor="repassword">
                Re-password:
              </label>
              <input
                type="password"
                className="form-control"
                name="repassword"
                onChange={handleChange}
                value={registerForm.repassword}
                placeholder="Re-enter your password"
              />
              {formError.repassword ? (
                <p className="text-danger">{formError.repassword}</p>
              ) : (
                ""
              )}
            </div>
          </div>

          <div className="row mb-2 d-flex justify-content-center">
            <div className="col-12 col-md-6 d-flex flex-column justify-content-between">
              <a href="#" className="text-decoration-none">
                Forgot Password?
              </a>
              <a href="/admlogin" className="text-decoration-none">
                already an user?
              </a>
            </div>
          </div>

          <div className="row d-flex justify-content-center">
            <div className="col-12 col-md-6">
              <button className="btn btn-primary" type="submit">
                Sign In
              </button>
              <button
                onClick={() => {
                  navigate("/admlogin");
                }}
                className="btn btn-danger ms-1"
              >
                Admin signup
              </button>
            </div>
          </div>
        </form>
      )}
    </>
  );
};

export default AdminRegistration;
