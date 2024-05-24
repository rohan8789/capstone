import React, { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { validate } from "../utility/validators";
import {AuthContext} from "../context/auth-context"
import LoadingSpinner from "../shared/LoadingSpinner";

const NGORegister = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  const [formData, setFormData] = useState({
    name: "",
    regno: "",
    dob: "",
    regAuth: "",
    phno: "",
    address: "",
    ngoObj: "",
  });

  const [formError, setFormError] = useState({
    name: "",
    regno: "",
    dob: "",
    regAuth: "",
    phno: "",
    address: "",
    ngoObj: "",
  });
  const [isLoading, setIsLoading] = useState();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setFormError((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  };

  const sendRequest = async () => {
    setIsLoading(true);
    try {
      console.log("bitch bc")
      const res = await axios.post(`https://capstone-server-inde.onrender.com/api/ngo/signup`, {
        name: formData.name,
        regno: formData.regno,
        dob: formData.dob,
        regAuth: formData.regAuth,
        phno: formData.phno,
        address: formData.address,
        ngoObj:formData.ngoObj,
        uid:auth.uid,
        status:"pending"
      });
      toast.success(res?.data?.message);
      setIsLoading(false);
      navigate(`/ngostatus/${auth.uid}`);
    } catch (error) {
      console.log(error)
      toast.error(error?.response?.data?.message);
      setIsLoading(false);
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    let x = validate(formData);
    console.log(x);
    setFormError({
      name: x.name,
      regno: x.regno,
      dob: x.dob,
      regAuth: x.regAuth,
      phno: x.phno,
      address: x.address,
      ngoObj: x.ngoObj
    });
    if(x.name==="" && x.regno==="" && x.dob ==="" && x.regAuth==="" && x.phno ==="" &&x.address==="" && x.ngoObj===""){
      console.log("hell");
      sendRequest();
    }else{
      x.name="";
      x.regno="";
      x.dob="";
      x.regAuth="";
      x.phno="";
      x.address="";
      x.ngoObj="";
    }
  };

  return (
    <>
    {isLoading && <LoadingSpinner/>}
    {!isLoading &&
    <div className="container mt-5">
      <h1 className="text-center">NGO Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">NGO Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Enter NGO Name"
            value={formData.name}
            onChange={handleChange}
          />
          {formError.name ? <p>{formError.name}</p> : ""}
        </div>
        <div className="form-group">
          <label htmlFor="regno">Registration Number</label>
          <input
            type="text"
            className="form-control"
            name="regno"
            placeholder="Enter Registration Number"
            value={formData.regno}
            onChange={handleChange}
          />
          {formError.regno ? <p>{formError.regno}</p> : ""}
        </div>
        <div className="form-group">
          <label htmlFor="dob">Registration Date</label>
          <input
            type="date"
            className="form-control"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
          />

          {formError.dob ? <p>{formError.dob}</p> : ""}
        </div>
        <div className="form-group">
          <label htmlFor="regAuth">Registration Authority</label>
          <input
            type="text"
            className="form-control"
            name="regAuth"
            placeholder="Enter Registration Authority"
            value={formData.regAuth}
            onChange={handleChange}
          />

          {formError.regAuth ? <p>{formError.regAuth}</p> : ""}
        </div>
        <div className="form-group">
          <label htmlFor="phno">Contact Number</label>
          <input
            type="tel"
            className="form-control"
            name="phno"
            placeholder="Enter Contact Number"
            value={formData.phno}
            onChange={handleChange}
          />

          {formError.phno ? <p>{formError.phno}</p> : ""}
        </div>
        <div className="form-group">
          <label htmlFor="address">Address</label>
          <textarea
            className="form-control"
            name="address"
            rows="3"
            placeholder="Enter Address"
            value={formData.address}
            onChange={handleChange}
          ></textarea>

          {formError.address ? <p>{formError.address}</p> : ""}
        </div>
        <div className="form-group">
          <label htmlFor="ngoObj">NGO Objectives</label>
          <textarea
            className="form-control"
            name="ngoObj"
            rows="3"
            placeholder="Describe NGO Objectives"
            value={formData.ngoObj}
            onChange={handleChange}
          ></textarea>

          {formError.ngoObj ? <p>{formError.ngoObj}</p> : ""}
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  }
  </>
  );
};

export default NGORegister;
