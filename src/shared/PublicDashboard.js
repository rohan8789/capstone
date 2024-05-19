import React, { useContext } from "react";
import logo from "../images/logo2.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const Navbar = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  console.log(auth);

  const logMeOut = () => {
    if(auth.isLoggedIn)auth.logout();
    if(auth.isAdminLoggedIn)auth.adm_logout();
    navigate('/');

  }
  return (
    <>
      <div className="row m-1 border border-black">
        <div className="col m-1 navlink">
          <div className="col m-1 d-flex float-end justify-content-center align-items-center rounded-1">
            <NavLink
              to="/criteria"
              onClick={() => {
                let user = JSON.parse(localStorage.getItem('userData'));
                if(user){
                  user.dashboard="ngo";
                  console.log(user)
                  const updatedUser = JSON.stringify(user);
                  localStorage.setItem('userData', updatedUser);
                  auth.changeDashboard(user.dashboard)
                }else{
                  auth.changeDashboard("ngo");
                }
              }}
              className="text-decoration-none text-center w-100 p-2"
            >
              NGO Dashboard
            </NavLink>
          </div>
          {!auth.isLoggedIn && (
            <div className="col m-1 d-flex float-end justify-content-center align-items-center rounded-1">
              <NavLink
                to="/admlogin"
                onClick={() => { 
                  let user = localStorage.getItem("userData");
                  console.log("Ban ja", user);
                  if(user){
                    user.dashboard = "admin";
                    const updatedUser = JSON.stringify(user);
                    localStorage.setItem("userData", updatedUser);
                    auth.changeDashboard(user.dashboard);
                  }else{ 
                    auth.changeDashboard("admin");
                  }
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
              Ministry of Women & Child development
            </h1>
          </div>
        </div>
      </div>
      <div className="row m-1 justify-content-evenly navlink">
        <div className="col d-flex justify-content-center align-items-center rounded-1 ">
          <NavLink
            to="/about"
            className="text-decoration-none d-flex align-items-center justify-content-center w-100 p-2 m-1"
          >
            About Us
          </NavLink>
        </div>
        <div className="col d-flex justify-content-center align-items-center rounded-1 ">
          <NavLink
            to="/ngo"
            className="text-decoration-none d-flex align-items-center justify-content-center w-100 p-2 m-1"
          >
            NGOs
          </NavLink>
        </div>

        <div className="col d-flex justify-content-center align-items-center rounded-1 ">
          <div className="dropdown">
            <NavLink
              to="/training"
              className="text-decoration-none d-flex align-items-center justify-content-center w-100 p-2 m-1 dropdown-toggle"
              role="button"
              id="contactDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              All Training Sector
            </NavLink>
            <ul className="dropdown-menu" aria-labelledby="contactDropdown">
              <li>
                <NavLink
                  to="/training/agriculture"
                  className="dropdown-item mb-1"
                >
                  Agriculture
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/training/tailoring"
                  className="dropdown-item mb-1"
                >
                  Tailoring
                </NavLink>
                <NavLink to="/training/stiching" className="dropdown-item ">
                  Stiching
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col d-flex justify-content-center align-items-center rounded-1 ">
          <div className="dropdown">
            <NavLink
              to="/scheme"
              className="text-decoration-none text-center w-100 p-2 m-1 dropdown-toggle"
              role="button"
              id="contactDropdown"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Schemes & Guildlines
            </NavLink>
            <ul className="dropdown-menu" aria-labelledby="contactDropdown">
              <li>
                <NavLink to="/scheme/poshan" className="dropdown-item mb-1">
                  Mission Poshan
                </NavLink>
              </li>
              <li>
                <NavLink to="/scheme/shakti" className="dropdown-item mb-1">
                  Mission Shakti
                </NavLink>
              </li>
              <li>
                <NavLink to="/scheme/intern" className="dropdown-item">
                  Mission Internship
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="col d-flex justify-content-center align-items-center rounded-1 ">
          <NavLink
            to="/register"
            className="text-decoration-none d-flex align-items-center justify-content-center w-100 p-2 m-1"
          >
            Registration
          </NavLink>
        </div>
        <div className="col d-flex justify-content-center align-items-center rounded-1 ">
          <NavLink
            to={`/status/${auth.uid}`}
            className="text-decoration-none d-flex align-items-center justify-content-center w-100 p-2 m-1"
          >
            Status
          </NavLink>
        </div>

        <div className="col d-flex justify-content-center align-items-center rounded-1">
          <NavLink
            to="/faq"
            className="text-decoration-none d-flex align-items-center justify-content-center w-100 p-2 m-1"
          >
            FAQ
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
