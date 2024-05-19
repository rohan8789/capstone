import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import LoadingSpinner from "../shared/LoadingSpinner";
import axios from "axios";

const NGOStatus = () => {
  const [formInfo, setFormInfo] = useState();
  const [nArr, setnArr] = useState();
  const [isLoading, setIsLoading] = useState();

  const userId = useParams().userId;
  console.log(userId);
  useEffect(() => {
    const sendRequest = async () => {
      console.log("HII modi ji")
      setIsLoading(true);
      try {
        const data = await axios.get(`https://capstone-server-inde.onrender.com/api/ngo/formlist/${userId}`);
        console.log(data?.data)
    //     // console.log(data?.data?.ridArr[0]?.ridArr);
        setnArr(data?.data?.nidArr);
        setFormInfo(data?.data?.users);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setIsLoading(false);
      }
    };
    sendRequest();
  }, []);
  if (formInfo === undefined || nArr === undefined) {
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
          <div className="container">
            <h2 className="h2">
              You should apply for scholarship and training
            </h2>
            <div className="">
              <button to="/register">Add New</button>
            </div>
          </div>
        )}
      </>
    );
  } else {
    return (
      <>
        {isLoading && <LoadingSpinner />}
        {!isLoading && (
          <div className="container">
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Sr. No.</th>
                  <th scope="col">Applications</th>
                  <th scope="col">View Details</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                {nArr.map((e, i) => {
                  // console.log("Rohan", rArr[i]);
                  return (
                    <tr>
                      <th scope="row">{i + 1}</th>
                      <td>{formInfo[i]?.name}</td>
                      <td>
                        <a href={`/ngostatus/${userId}/${e}`}>view</a>
                      </td>
                      {formInfo[i]?.status === "pending" ? (
                        <td style={{ color: "red" }}>{formInfo[i]?.status}</td>
                      ) : (
                        <td style={{ color: "green" }}>{formInfo[i]?.status}</td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </>
    );
  }
};

export default NGOStatus;
