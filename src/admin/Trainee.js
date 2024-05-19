import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import LoadingSpinner from "../shared/LoadingSpinner";

const Trainee = () => {
  const [rArr, setrArr] = useState();
  const [isLoading, setIsLoading] = useState();

  const navigate = useNavigate();
  const handleAccept = async (e) => {
    const r_id = e.target.value;
    console.log(r_id, "rohan")
    try {
      const res = await axios.get(`http://localhost:5000/api/admin/reg/${r_id}`);
      console.log(res);
      toast.success(res?.data?.message);
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    }
  };

  const handleReject = async (e) => {
    const r_id = e.target.value;
    try {
      const res = await axios.delete(`http://localhost:5000/api/admin/reg/${r_id}`);
      console.log(res);
      toast.success(res?.data?.message);
      window.location.reload();
    } catch (err) {
      console.log(err);
      toast.error(err?.response?.data?.message);
    }
  };




  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const data = await axios.get(`http://localhost:5000/api/admin/getrids`);
        console.log(data?.data);
        setrArr(data?.data?.regArr);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    sendRequest();
  }, []);
  // console.log(rArr);
  if (rArr === undefined) {
    return (
      <>
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <div className="container d-flex justify-content-center border mt-5">
            <h2 className="h2">
              Something went wrong while fetching data from server
            </h2>
          </div>
        )}
      </>
    );
  }

  if (rArr.length === 0) {
    return (
      <>
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <div className="container">
            <div
              className="container border d-flex justify-content-center align-items-center"
              style={{ height: "300px" }}
            >
              <h2 className="h2">No applicant registered for training program</h2>
            </div>
          </div>
        )}
      </>
    );
  }else{

    return (
      <div className="container mt-4">
      <div className="table-responsive">
        <table className="table table-dark table-bordered">
          <thead>
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">Name of Applicant</th>
              <th scope="col">field of training</th>
              <th scope="col">Accept</th>
              <th scope="col">Reject</th>
            </tr>
          </thead>
          <tbody>
            {
              rArr?.map((e, i)=>{
                return (
                  <tr>
                    <th scope="row">{i + 1}</th>
                    <td>{e.name}</td>
                    <td>{e.training}</td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-success btn-sm"
                          onClick={handleAccept}
                          value={e._id}
                        >
                          Accept
                        </button>
                      </div>
                    </td>
                    <td>
                      <div className="d-flex justify-content-center">
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={handleReject}
                          value={e._id}
                        >
                          Reject
                        </button>
                      </div>
                    </td>
                  </tr>
                );   
              })
            }
          </tbody>
        </table>
      </div>
    </div>
  );
};
}

export default Trainee;
