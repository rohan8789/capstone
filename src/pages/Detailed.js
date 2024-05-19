import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';

import '../index.css'
import axios from 'axios';
const Detailed = () => {

    const [formInfo, setFormInfo] = useState();
    const [isLoading, setIsLoading] = useState();
    const formId = useParams().formId;
    const location = useLocation();
    const pathSegments = location.pathname.split("/");
    const userId = pathSegments[2];
    useEffect(() => {
      const sendRequest = async () => {
        setIsLoading(true);
        try {
          const data = await axios.get(`https://capstone-server-inde.onrender.com/api/regusers/formlist/${userId}/${formId}`);
          console.log(data);
          setFormInfo(data?.data?.users);
          setIsLoading(false);
        } catch (err) {
          console.log(err);
          setIsLoading(false);
        }
      };
      sendRequest();
    }, []);

    const receivedImagePath = formInfo?.aadhar;
    const correctedImagePath = receivedImagePath?.replace(/\\/g, "/");
    const path = "http://localhost:5000/"+correctedImagePath;
    console.log(path);


  return (
    <div class="user-profile">
      <h2>User Details</h2>
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <img
          src={path}
          style={{ width: "200px", height: "200px" }}
          alt="Aadhar Card"
          id="aadharImage"
        />
        <h4 id="name">{formInfo?.name}</h4>
      </div>
      <div className="row details">
        <div className='col-6 border d-flex justify-content-around '>
          <span id="email">{formInfo?.email}</span>
        </div>
        <div className='col-6 border d-flex justify-content-around '>
          <span id="fatherName">{formInfo?.fname}</span>
        </div>
        <div className='col-6 border d-flex justify-content-around '>
          <span id="motherName">{formInfo?.mname}</span>
        </div>
        <div className='col-6 border d-flex justify-content-around '>
          <span id="phoneNumber">{formInfo?.phno}</span>
        </div>
        <div className='col-6 border d-flex  justify-content-center '>
          <span id="address">{formInfo?.address}</span>
        </div>
      </div>
    </div>
  );
}

export default Detailed
