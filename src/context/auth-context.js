import { useState, useCallback, createContext } from "react";

export const AuthContext = createContext({
  toggle: 'public',
  dashboard:'public',
  isLoggedIn: false,
  isAdminLoggedIn: false,
  token: null,
  uid: null,
  login: () => {},
  logout: () => {},
  changeToggle: () => {},
  changeDashboard:() =>{},
  adm_login: () => {},
  adm_logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(false);
  const [adminToken, setAdminToken] = useState(false);
  const [uid, setUId] = useState(null);
  const [aid, setAid] = useState(null);
  const [toggle, setToggle] = useState('public');
  const [dashboard, setDashboard] = useState(()=>{
    let user = JSON.parse(localStorage.getItem('adm-data'));
    if(user){
      user.dashboard = "admin";
      const updatedUser = JSON.stringify(user);
      localStorage.setItem("adm-data", updatedUser);
      return "admin";
    }else{
      return "public";
    }
  });

  const login = useCallback((uid, token, state) => {
    setToken(token);
    setUId(uid);
    setDashboard(state);
    localStorage.setItem("userData", JSON.stringify({ userId: uid, token: token, dashboard:state }));
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setUId(null);
    localStorage.removeItem("userData");
  }, []);

  const changeToggle = (s) => {
      setToggle(s);
  };

  const changeDashboard = (e) => {
    setDashboard(e);
  }

  const adm_login = useCallback((aid, token, state) => {
    setAdminToken(token);
    setAid(aid);
    setDashboard(state)
    localStorage.setItem("adm-data", JSON.stringify({ aid: aid, adminToken:token, dashboard:state }));
  }, []);
  const adm_logout = useCallback(() => {
    setToken(null);
    setAid(null);
    localStorage.removeItem("adm-data");
  }, []);
  

  return (
    <AuthContext.Provider
      value={{
        toggle,
        dashboard,
        isLoggedIn: !!token,
        isAdminLoggedIn: !!adminToken,
        token,
        adminToken,
        uid,
        aid,
        login,
        logout,
        changeToggle,
        changeDashboard,
        adm_login,
        adm_logout
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
