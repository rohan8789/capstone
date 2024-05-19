import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

import "../index.css";
import axios from "axios";
const Detailed = () => {
    const [formInfo, setFormInfo] = useState();
    const [isLoading, setIsLoading] = useState();
    const formId = useParams().formId;
    const location = useLocation();
    const pathSegments = location.pathname.split("/");
    const userId = pathSegments[2];
    //   console.log(formId)
    useEffect(() => {
        const sendRequest = async () => {
            setIsLoading(true);
            try {
                const data = await axios.get(`https://capstone-server-inde.onrender.com/api/ngo/formlist/${userId}/${formId}`);
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

  

  return (
    <div className="container user-profile mt-5">
      <h2 className="text-center">NGO Details</h2>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <h4 id="name" className="text-primary mt-3">
          {formInfo?.name}
        </h4>
      </div>
      <div className="row details mt-4">
        <div className="col-12 col-md-6 border d-flex  p-3">
          <p className="m-0">Registration Number:</p>
          <span className="regno">{formInfo?.regno}</span>
        </div>
        <div className="col-12 col-md-6 border d-flex p-3">
          <p className="m-0 pe-3">Registration Date:</p>
          <span className="dob">{formInfo?.dob}</span>
        </div>
        <div className="col-12 col-md-6 border d-flex p-3">
          <p className="m-0 pe-3">Contact Number:</p>
          <span className="phno">{formInfo?.phno}</span>
        </div>
        <div className="col-12 col-md-6 border d-flex p-3">
          <p className="m-0 pe-3">Registration Authority:</p>
          <span className="regAuth">{formInfo?.regAuth}</span>
        </div>
        <div className="col-12 col-md-6 border d-flex p-3">
          <p className="m-0 pe-3">Address:</p>
          <span className="address">{formInfo?.address}</span>
        </div>
        <div className="col-12 col-md-6 border d-flex p-3">
          <p className="m-0 pe-3">Objective:</p>
          <span className="ngoObj">{formInfo?.ngoObj}</span>
        </div>
      </div>
    </div>
  );
};

export default Detailed;
