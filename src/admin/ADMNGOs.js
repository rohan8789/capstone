import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import LoadingSpinner from '../shared/LoadingSpinner';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ADMNGOs = () => {
  const [nArr, setnArr] = useState();
  const [isLoading, setIsLoading] = useState();

  const navigate = useNavigate();
  const handleAccept = async (e) =>{
    const ngo_id = e.target.value;
    try{
      const res = await axios.get(`https://capstone-server-inde.onrender.com/api/admin/${ngo_id}`);
      // console.log(res?.data?.message);
      toast.success(res?.data?.message);
    }catch(err){
      console.log(err)
      toast.error(err?.response?.data?.message);
    }
  }

  const handleReject = async (e) =>{
    const ngo_id = e.target.value;
    try{
      const res = await axios.delete(`https://capstone-server-inde.onrender.com/api/admin/${ngo_id}`);
      console.log(res);
      toast.success(res?.data?.message);
      window.location.reload();
    }catch(err){
      console.log(err);
      toast.error(err?.response?.data?.message);
    }
  }


  useEffect(() => {
    const sendRequest = async () => {
      setIsLoading(true);
      try {
        const data = await axios.get(`https://capstone-server-inde.onrender.com/api/admin/getngos`);
        console.log(data?.data);
        //     // console.log(data?.data?.ridArr[0]?.ridArr);
        setnArr(data?.data?.ngoArr);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    sendRequest();
  }, []);

  if (nArr === undefined) {
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

  if (nArr.length === 0) {
    return (
      <>
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <div className="container border d-flex justify-content-center align-items-center" style={{height:"300px"}}>
            <h2 className="h2">No NGOs Registered on your website</h2>  
          </div>
        )}
      </>
    );
  }else{
    console.log(nArr)
    
    return (
      <div className="container mt-4">
      <div className="table-responsive">
        <table className="table table-dark table-bordered">
          <thead>
            <tr>
              <th scope="col">Sr No.</th>
              <th scope="col">NGOs Names</th>
              <th scope='col'>Authority Name</th>
              <th scope="col">Accept</th>
              <th scope="col">Reject</th>
            </tr>
          </thead>
          <tbody>
              {
                nArr?.map((e, i)=>{
                  return(  
                    <tr>
                      <th scope="row">{i+1}</th>
                      <td>{e?.name}</td>
                      <td>{e?.regAuth}</td>
                      <td>
                        <div className="d-flex justify-content-center">
                          <button className="btn btn-success btn-sm" onClick={handleAccept} value={e._id}>Accept</button>
                        </div>
                      </td>
                      <td>
                        <div className="d-flex justify-content-center">
                          <button className="btn btn-danger btn-sm" onClick={handleReject} value={e._id}>Reject</button>
                        </div>
                      </td>
                    </tr>
                  )})
              }
          </tbody>
        </table>
      </div>
    </div>
  );
}
}

export default ADMNGOs
