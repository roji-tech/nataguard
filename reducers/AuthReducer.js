const tokenize = (token) => `Bearer ${token}`;

export const typ = {
  setAll: "setAll",
  setToken: "setToken",
  clearToken: "clearToken",
  clearAll: "clearAll",
  setUser: "setUser",
  updateUser: "updateUser",
  setHealthInfoSubmitted: "setHealthInfoSubmitted",
};
export const emptyState = {
  token: null,
  user: null,
};
export const initialState = {
  token: globalThis?.localStorage?.getItem("token") || null,
  userType: globalThis?.localStorage?.getItem("userType")
    ? JSON.parse(globalThis?.localStorage?.getItem("userType"))
    : "patient",
  healthInfoSubmitted: globalThis?.localStorage?.getItem("healthInfoSubmitted")
    ? JSON.parse(globalThis?.localStorage?.getItem("healthInfoSubmitted"))
    : false,
  user: globalThis?.localStorage?.getItem("user")
    ? JSON.parse(globalThis?.localStorage?.getItem("user"))
    : null,
};

function setLocalToken(set = true, accessToken = null) {
  if (set) {
    globalThis.localStorage.setItem("token", tokenize(accessToken));
    globalThis.localStorage.setItem("healthInfoSubmitted", true);
  }
  localStorage.removeItem("token");
  localStorage.removeItem("healthInfoSubmitted");
}

function setLocalUser(set, userDict = null) {
  if (set) {
    return localStorage.setItem("user", JSON.stringify(userDict));
  }
  return localStorage.removeItem("user");
}

export const authReducer = (state, action) => {
  const newData = action.payload;

  switch (action.type) {
    case typ.clearTokens:
      console.log("removing token from clearToken");
      localStorage.removeItem("token");
      localStorage.removeItem("healthInfoSubmitted");
      return { ...state, token: null };

    case typ.clearAll:
      localStorage.removeItem("token");
      localStorage.removeItem("healthInfoSubmitted");

      console.log("removing tokens from clearAll");
      setLocalToken(false);
      setLocalUser(false);
      // alert("loging out");
      return { ...emptyState };

    case typ.setToken:
      setLocalToken(true, newData?.token);
      globalThis.localStorage.setItem("token", tokenize(newData?.token));
      globalThis.localStorage.setItem("healthInfoSubmitted", true);

      // alert(newData?.healthInfoSubmitted);
      console.log("newdata", newData);

      return {
        ...state,
        token: tokenize(newData?.token),
        healthInfoSubmitted: newData?.healthInfoSubmitted,
      };

    case typ.setAll:
      setLocalToken(true, newData?.token);
      setLocalUser(true, newData?.user);

      globalThis.localStorage.setItem("token", tokenize(newData?.token));
      globalThis.localStorage.setItem(
        "healthInfoSubmitted",
        newData?.healthInfoSubmitted
      );
      globalThis.localStorage.setItem("user", JSON.stringify(newData?.user));

      return {
        ...state,
        token: tokenize(newData?.token),
        healthInfoSubmitted: newData?.healthInfoSubmitted,
      };

    case typ.setUser:
      setLocalUser(true, newData?.user);
      return { ...state, user: newData?.user };

    case typ.updateUser:
      return { ...state, user: { ...state.user, ...newData?.user } };

    case typ.setHealthInfoSubmitted:
      globalThis.localStorage.setItem("healthInfoSubmitted", true);
      return { ...state, healthInfoSubmitted: true };

    default:
      // alert("NO type");
      return state;
  }
};
