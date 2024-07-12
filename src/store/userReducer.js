const defaultState = {
  id: "",
  email: "",
  name: "",
  surname: "",
  isAuth: false,
};

const SET_AUTH = "SET_AUTH";
const SET_NOTAUTH = "SET_NOTAUTH";

export const userReducer = (state = defaultState, action) => {
  const payload = action.payload;

  switch (action.type) {
    case SET_AUTH:
      return {
        id: payload.id,
        email: payload.email,
        name: payload.name,
        surname: payload.surname,
        isAuth: true,
      };
    case SET_NOTAUTH:
      return { ...defaultState };
    default:
      return state;
  }
};

export const setAuthAction = (payload) => ({ type: SET_AUTH, payload });
export const setNotAuthAction = (payload) => ({ type: SET_NOTAUTH, payload });
