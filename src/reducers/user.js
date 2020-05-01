const initialState = {
  isLogged: false,
  userData: {},
};

const user = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_LOGIN_STATUS':
      return {
        ...state,
        isLogged: action.value,
      };
    case 'UPDATE_USER_DATA':
      return {
        ...state,
        userData: action.userData,
      };
    case 'LOGOUT':
      return initialState;
    default:
      return state;
  }
};

export default user;
