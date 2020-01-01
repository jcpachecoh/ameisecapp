import { reduxActions } from '../constants';

const initialState = {
  pageNumber: 0,
  showMenu: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case reduxActions.UPDATE_PAGE_VIEW:
      return {
        ...state,
        pageNumber: payload,
      };
    case reduxActions.SHOW_MENU:
      return {
        ...state,
        showMenu: payload,
      };

    default:
      return state;
  }
};
