import React, { useContext } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import logo from "../images/logo2.jpg";
import { AuthContext } from '../context/auth-context';


const AdminDashboard = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  console.log(auth);

  const logMeOut = () => {
    auth.adm_logout();
    navigate("/auth");
    auth.changeDashboard('public');
  };
  return (
    <>
      <div className="row m-1 border border-black">
        <div className="col m-1 navlink">
          {!auth.isAdminLoggedIn && 
            <div className="col m-1 d-flex float-end justify-content-center align-items-center rounded-1">
              <NavLink
                to="/about"
                onClick={() => {
                  auth.changeDashboard("public");
                }}
                className="text-decoration-none text-center w-100 p-2"
                >
                Public Dashboard
              </NavLink>
            </div>
          }
          {!auth.isAdminLoggedIn && (
            <div className="col m-1 d-flex float-end justify-content-center align-items-center rounded-1">
              <NavLink
                to="/contact"
                onClick={() => {
                  auth.changeDashboard("ngo");
                }}
                className="text-decoration-none text-center w-100 p-2"
              >
                NGO Dashboard
              </NavLink>
            </div>
          )}
          {auth.isAdminLoggedIn && (
            <div className="col m-1 d-flex float-end justify-content-center align-items-center rounded-1">
              <button
                onClick={logMeOut}
                className="text-decoration-none text-center w-100 p-2 rounded-1"
              >
                Logout
              </button>
            </div>
          )}
          {!auth.isAdminLoggedIn && (
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
            <h1 className="text-end pe-3 ">Admin Dashboard</h1>
          </div>
        </div>
      </div>
      <div className="row m-1 justify-content-evenly navlink">
        <div className="col d-flex justify-content-center align-items-center rounded-1 ">
          <NavLink
            to="/admabout"
            className="text-decoration-none d-flex align-items-center justify-content-center w-100 p-2 m-1"
          >
            About US
          </NavLink>
        </div>

        <div className="col d-flex justify-content-center align-items-center rounded-1 ">
          <NavLink
            to="/admngo"
            className="text-decoration-none d-flex align-items-center justify-content-center w-100 p-2 m-1"
          >
            All Registered NGOs
          </NavLink>
        </div>
        <div className="col d-flex justify-content-center align-items-center rounded-1 ">
          <NavLink
            to="/trainee"
            className="text-decoration-none d-flex align-items-center justify-content-center w-100 p-2 m-1"
          >
            Trainee
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default AdminDashboard