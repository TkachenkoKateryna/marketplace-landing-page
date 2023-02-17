import React, { useCallback, useEffect, useState } from "react";

let logoutTimer;

const AuthContext = React.createContext({
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: (token) => {},
});

const calculateRemainingTime = (expTime) => {
  const curTime = new Date().getTime();
  const adjExpTime = new Date(expTime).getTime();

  return curTime - adjExpTime;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  console.log("storedToken :>> ", storedToken);
  const expirationTime = localStorage.getItem("expirationTime");
  console.log("expirationTime :>> ", expirationTime);

  const remainingTime = calculateRemainingTime(expirationTime);

  console.log("remainingTime :>> ", remainingTime);

  if (remainingTime < 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();

  console.log("tokenData", tokenData);

  let initialToken;

  if (tokenData) {
    initialToken = tokenData.token;
  }

  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expTime) => {
    console.log("token :>> ", token);
    console.log("expTime :>> ", expTime);

    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expTime);

    const remainingTime = calculateRemainingTime(expTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    logout: logoutHandler,
    login: loginHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
