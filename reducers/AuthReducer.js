const tokenize = (token) => `Bearer ${token}`;

export const typ = {
  setAll: "setAll",
  setToken: "setToken",
  clearToken: "clearToken",
  clearAll: "clearAll",
  setUser: "setUser",
  updateUser: "updateUser",
};
export const emptyState = {
  token: null,
  user: null,
};
export const initialState = {
  token: globalThis?.localStorage?.getItem("token") || null,

  user: globalThis?.localStorage?.getItem("user")
    ? JSON.parse(globalThis?.localStorage?.getItem("user"))
    : null,
};

function setLocalToken(set = true, accessToken = null) {
  if (set) {
    return localStorage.setItem("token", tokenize(accessToken));
  }
  return localStorage.removeItem("token");
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
      setLocalToken(false);
      return { ...state, token: null, };

    case typ.clearAll:
      console.log("removing tokens from clearAll");
      setLocalToken(false);
      setLocalUser(false);
      return { ...emptyState };

    case typ.setToken:
      setLocalToken(true, newData?.token);
      return { ...state, token: tokenize(newData?.token) };

    case typ.setAll:
      setLocalToken(true, newData?.token);
      setLocalUser(true, newData?.user);
      return {
        ...state,
        token: tokenize(newData?.token),
      };

    case typ.setUser:
      setLocalUser(true, newData?.user);
      return { ...state, user: newData?.user };

    case typ.updateUser:
      return { ...state, user: { ...state.user, ...newData?.user } };


    default:
      return state;
  }
};
