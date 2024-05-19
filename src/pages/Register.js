import React, { useContext, useState } from "react";
import { validate } from "../utility/validators";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import '../shared/Auth.css'
import axios from "axios";
import { AuthContext } from "../context/auth-context";
import { useNavigate } from "react-router-dom";

function Register() {
  const [isLoading, setIsLoading] = useState();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    fname: "",
    mname: "",
    phno: "",
    address: "",
    aadharimg: null,
    training: "",
  });

  const [formError, setFormError] = useState({
    name: "",
    email: "",
    fname: "",
    mname: "",
    phno: "",
    address: "",
    aadharimg: null,
    training: "",
  });
  const navigate = useNavigate();
  const auth = useContext(AuthContext);


  const handleChange = (e) => {
    const { name, files, value } = e.target;
    // console.log(name, value)
    setFormData((prev) => {
      return {
        ...prev,
        [name]: name === "aadharimg" ? files[0] : value,
      };
    });
    setFormError((prev) => ({
      ...prev,
      [name]: name === "aadharimg" ? null : "",
    }));
  };

  const sendRequest = async (e) =>{
    console.log("HI Rohan");
    setIsLoading(true);
    try{
      const fData = new FormData();
      fData.append("name", formData.name);
      fData.append("email", formData.email);
      fData.append("fname", formData.fname);
      fData.append("mname", formData.mname);
      fData.append("phno", formData.phno);
      fData.append("address", formData.address);
      fData.append("aadharimg", formData.aadharimg);
      fData.append("training", formData.training);
      fData.append("uid", auth.uid);
      fData.append("status", "pending");
      const data = await axios.post(`https://capstone-server-inde.onrender.com/api/regusers`, fData);
      toast.success(data?.data?.message);
      navigate(`/status/${auth.uid}`);
    }catch(err){
      toast.error(err?.response?.data?.message)
      console.log(err);
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    let x = validate(formData);
    setFormError({
      name: x.name,
      email: x.email,
      fname:x.fname,
      mname:x.mname,
      phno:x.phno,
      address:x.address,
      aadharimg:x.aadharimg,
      training:x.training,
    });
    console.log("Hello")
    console.log(formError)
    if (x.name === "" && x.email === "" && x.fname==="" && x.mname==="" && x.phno==="" && x.address==="" && x.aadharimg===null && x.training===""){
      console.log("hiiiiiiiiii")
      sendRequest();
    } else {
      x.name="";
      x.email="";
      x.fname="";
      x.mname="";
      x.phno="";
      x.address="";
      x.aadharimg=null;
      x.training="";
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Registration Form</h2>

      {/* Personal Details Section */}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <h3>Personal Details</h3>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name: "
            />
            {formError.name ? <p>{formError.name}</p> : ""}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {formError.email ? <p>{formError.email}</p> : ""}
          </div>
        </div>

        <div className="mb-4">
          <h3>Family Details</h3>
          <div className="form-group">
            <label htmlFor="fname">Father's Name</label>
            <input
              type="text"
              className="form-control"
              name="fname"
              value={formData.fname}
              onChange={handleChange}
              placeholder="Enter your father's name"
            />
            {formError.fname ? <p>{formError.fname}</p> : ""}
          </div>
          <div className="form-group">
            <label htmlFor="mname">Mother's Name</label>
            <input
              type="text"
              className="form-control"
              name="mname"
              value={formData.mname}
              onChange={handleChange}
              placeholder="Enter your mother's name"
            />
            {formError.mname ? <p>{formError.mname}</p> : ""}
          </div>
        </div>

        <div className="mb-4">
          <h3>Contact Details</h3>
          <div className="form-group">
            <label htmlFor="phno">Phone Number</label>
            <input
              type="text"
              className="form-control"
              name="phno"
              value={formData.phno}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
            {formError.phno ? <p>{formError.phno}</p> : ""}
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <textarea
              className="form-control"
              name="address"
              value={formData.address}
              onChange={handleChange}
              rows="3"
              placeholder="Enter your address"
            ></textarea>
            {formError.address ? <p>{formError.address}</p> : ""}
          </div>
        </div>

        <div className="mb-4">
          <h3>Document Section</h3>
          <div className="form-group">
            <label htmlFor="aadharimg">Aadhar Card</label>
            <input
              type="file"
              className="form-control-file"
              accept=".jpg, .jpeg, .png"
              name="aadharimg"
              onChange={handleChange}
            />
            {formError.aadharimg ? <p>{formError.aadharimg}</p> : ""}
          </div>
        </div>

        <div className="mb-4">
          <h3>Training Course Details</h3>
          <div className="form-group">
            <label htmlFor="training">Training Name</label>
            <input
              type="text"
              className="form-control"
              name="training"
              value={formData.training}
              onChange={handleChange}
              placeholder="Enter the course name"
            />
            {formError.training ? <p>{formError.training}</p> : ""}
          </div>
        </div>
        <button type="submit" className="btn btn-primary ">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Register;
