import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { initialState, authReducer, typ } from "@reducers/AuthReducer";
import { api } from "@config";
// import { ShowErrors } from "@utils/ShowErrors";

const AuthContext = createContext({
  state: {
    user: globalThis?.localStorage?.getItem("user")
      ? JSON.parse(globalThis?.localStorage?.getItem("user"))
      : {},
    token: globalThis?.localStorage?.getItem("token") || null,
    healthInfoSubmitted: globalThis?.localStorage?.getItem(
      "healthInfoSubmitted"
    )
      ? JSON.parse(globalThis?.localStorage?.getItem("healthInfoSubmitted"))
      : false,
  },
  dispatchFunc: () => null,
  logout: () => null,
  fetchUser: () => null,
});

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const router = useRouter();

  const dispatchFunc = (type, payload = null) => dispatch({ type, payload });

  const logout = (replace = true) => {
    if (router.pathname.includes("[")) {
      let route = router.pathname.split("[")[0];
      dispatchFunc(typ.setPage, { page: route });
    }
    // ShowErrors("Logging Out");
    dispatchFunc(typ.clearAll);
    if (replace) {
      router.replace("/login");
    }
  };

  const contextData = {
    state,
    dispatchFunc,
    logout,
  };

  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};

// =================   USECONTEXT   ======================

const useAuth = () => useContext(AuthContext);

export default useAuth;
