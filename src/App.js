import { Routes, Route } from "react-router-dom";
import { useEffect, useContext } from "react";

import Agriculture from "./pages/training/Agriculture";
import Tailoring from "./pages/training/Tailoring";
import Stiching from "./pages/training/Stiching";
import Poshan from "./pages/scheme/Poshan";
import Shakti from "./pages/scheme/Shakti";
import Internship from "./pages/scheme/Internship";

import Status from "./pages/Status";
import Ngo from "./pages/Ngo";
import Faq from "./pages/Faq"
import About from "./pages/About";

import PublicDashboard from "./shared/PublicDashboard";
import Auth from "./shared/Auth";
import { AuthContext } from "./context/auth-context";
import Register from "./pages/Register";
import Detailed from "./pages/Detailed";
import NGODashboard from "./shared/NGODashboard";
import Criteria from "./NGOdashboard/Criteria";
import Organisation from "./NGOdashboard/Organisation";
import Funding from "./NGOdashboard/Funding";
import NGORegister from "./NGOdashboard/NGORegister";
import NGOStatus from "./NGOdashboard/NGOStatus";
import ADMAbout from "./admin/ADMAbout";
import ADMNGOs from "./admin/ADMNGOs";
import Trainee from "./admin/Trainee";
import AdminDashboard from "./shared/AdminDashboard";
import AdminLogin from "./shared/AdminLogin";
import AdminRegistration from "./shared/AdminRegistration";
import NGODetailed from "./NGOdashboard/NGODetailed"
import PageNotFound from "./shared/PageNotFound";

function App() {
  const auth = useContext(AuthContext);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("userData"));
    if(data){
      if (data?.userId && data?.token && data?.dashboard) {
        auth.login(data?.userId, data?.token, data?.dashboard);
      }
    }
    const data_1 = JSON.parse(localStorage.getItem("adm-data"))
    if(data_1){
      if(data_1?.aid && data_1?.adminToken && data_1?.dashboard){
        auth.adm_login(data_1?.adminId, data_1?.adminToken, data_1?.dashboard);
      }
    }
  }, [auth.login, auth.adm_login]);
  return (
    <>
      <>
        <header>
          {!auth.isLoggedIn && !auth.isAdminLoggedIn && (
            <>
              {auth.dashboard === "public" && <PublicDashboard />}
              {auth.dashboard === "ngo" && <NGODashboard />}
              {auth.dashboard === "admin" && <AdminDashboard />}
            </>
          )}
          {auth.isLoggedIn && !auth.isAdminLoggedIn && (
            <>
              {auth.dashboard === "ngo" && <NGODashboard />}
              {auth.dashboard === "public" && <PublicDashboard />}
            </>
          )}
          {!auth.isLoggedIn && auth.isAdminLoggedIn && (
            <>
              {auth.dashboard === "admin" && <AdminDashboard />}
            </>
          )}
        </header>
        <Routes>
          <Route>
            {!auth.isLoggedIn && !auth.isAdminLoggedIn ? (
              auth.dashboard === "admin" ? (
                <>
                  <Route path="/admlogin" element={<AdminLogin />} />
                  <Route path="/admreg" element={<AdminRegistration />} />
                  <Route path="*" element={<AdminLogin />} />
                </>
              ) : (
                <>
                  <Route path="/" exact element={<Auth />} />
                  <Route path="*" element={<Auth />} />
                </>
              )
            ) : (
              ""
            )}
            {auth.isLoggedIn && !auth.isAdminLoggedIn && (
              <>
                {/* Public */}
                <Route path="/about" exact element={<About />} />
                <Route path="/ngo" exact element={<Ngo />} />
                <Route path="/register" exact element={<Register />} />
                <Route path="/ngo/dashboard" exact element={<NGODashboard />} />
                <Route
                  path="/training/agriculture"
                  exact
                  element={<Agriculture />}
                />
                <Route
                  path="/training/tailoring"
                  exact
                  element={<Tailoring />}
                />
                <Route path="/training/stiching" exact element={<Stiching />} />
                <Route path="/scheme/poshan" exact element={<Poshan />} />
                <Route path="/scheme/shakti" exact element={<Shakti />} />
                <Route path="/scheme/intern" exact element={<Internship />} />
                <Route path="/status/:userId" exact element={<Status />} />
                <Route
                  path="/status/:userId/:formId"
                  exact
                  element={<Detailed />}
                />
                <Route path="/faq" exact element={<Faq />} />
                <Route path="*" element={<About />} />

                {/* NGO */}
                <Route path="/criteria" exact element={<Criteria />} />
                <Route path="/organisation" exact element={<Organisation />} />
                <Route path="/funding" exact element={<Funding />} />
                <Route path="/ngoreg" exact element={<NGORegister />} />
                <Route
                  path="/ngostatus/:userId"
                  exact
                  element={<NGOStatus />}
                />
                <Route
                  path="/ngostatus/:userId/:formId"
                  exact
                  element={<NGODetailed />}
                />
                <Route path="*" exact element={<PageNotFound />} />
              </>
            )}
            {auth.isAdminLoggedIn && !auth.isLoggedIn && (
              <>
                <Route path="/admabout" exact element={<ADMAbout />} />
                <Route path="/admngo" exact element={<ADMNGOs />} />
                <Route path="/trainee" exact element={<Trainee />} />
                <Route path="*" element={<PageNotFound />} />
              </>
            )}
          </Route>
        </Routes>
      </>
    </>
  );
}

export default App;
