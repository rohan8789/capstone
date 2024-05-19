import React, { useContext } from "react";
import logo from "../images/logo2.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const NGODashboard = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  console.log(auth);

  const logMeOut = () => {
    auth.logout();
    navigate("/");
  };
  return (
    <>
      <div className="row m-1 border border-black">
        <div className="col m-1 navlink">
          <div className="col m-1 d-flex float-end justify-content-center align-items-center rounded-1">
            <NavLink
              to="/about"
              onClick={() => {
                let user = JSON.parse(localStorage.getItem("userData"));
                if(user){
                  console.log(user);
                  user.dashboard="public";
                  const updatedUser = JSON.stringify(user);
                  console.log("haleluiyaa",updatedUser)
                  localStorage.setItem("userData", updatedUser);
                  auth.changeDashboard(user.dashboard)
                }else{
                  auth.changeDashboard("public");
                }
              }}
              className="text-decoration-none text-center w-100 p-2"
            >
              Public Dashboard
            </NavLink>
          </div>
          {!auth.isLoggedIn && (
            <div className="col m-1 d-flex float-end justify-content-center align-items-center rounded-1">
              <NavLink
                to="/admabout"
                onClick={() => {
                  auth.changeDashboard("admin")
                }}
                className="text-decoration-none text-center w-100 p-2"
              >
                Admin Dashboard
              </NavLink>
            </div>
          )}
          {auth.isLoggedIn && (
            <div className="col m-1 d-flex float-end justify-content-center align-items-center rounded-1">
              <button
                onClick={logMeOut}
                className="text-decoration-none text-center w-100 p-2 rounded-1"
              >
                Logout
              </button>
            </div>
          )}
          {!auth.isLoggedIn && (
            <div className="col m-1 d-flex float-end justify-content-center align-items-center rounded-1">
              <NavLink
                to="/"
                className="text-decoration-none text-center w-100 p-2"
              >
                Sign In
              </NavLink>
            </div>
          )}
        </div>
      </div>
      <div className="m-1 container-x border border-black">
        <div className="row align-items-center">
          <div className="col-auto">
            <img src={logo} alt="MWCD" width="80px" height="70px" />
          </div>
          <div className="col">
            <h1 className="text-end pe-3 ">
              Non-Government Organisation (NGOs)
            </h1>
          </div>
        </div>
      </div>
      <div className="row m-1 justify-content-evenly navlink">
        <div className="col d-flex justify-content-center align-items-center rounded-1 ">
          <NavLink
            to="/criteria"
            className="text-decoration-none d-flex align-items-center justify-content-center w-100 p-2 m-1"
          >
            Criteria
          </NavLink>
        </div>
        <div className="col d-flex justify-content-center align-items-center rounded-1 ">
          <NavLink
            to="/organisation"
            className="text-decoration-none d-flex align-items-center justify-content-center w-100 p-2 m-1"
          >
            Organisation
          </NavLink>
        </div>

        <div className="col d-flex justify-content-center align-items-center rounded-1 ">
          <NavLink
            to="/funding"
            className="text-decoration-none d-flex align-items-center justify-content-center w-100 p-2 m-1"
          >
            Funding Norms
          </NavLink>
        </div>
        <div className="col d-flex justify-content-center align-items-center rounded-1 ">
          <NavLink
            to={`/ngoreg`}
            className="text-decoration-none d-flex align-items-center justify-content-center w-100 p-2 m-1"
          >
            Register
          </NavLink>
        </div>

        <div className="col d-flex justify-content-center align-items-center rounded-1">
          <NavLink
            to={`/ngostatus/${auth.uid}`}
            className="text-decoration-none d-flex align-items-center justify-content-center w-100 p-2 m-1"
          >
            Status
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default NGODashboard;
