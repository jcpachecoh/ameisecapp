import { reduxActions } from '../constants';

const initialState = {
  pageNumber: null,
  showItemDetails: null,
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
    case reduxActions.SHOW_ITEM_DETAILS:
      return {
        showItemDetails: payload,
      };
    default:
      return state;
  }
};
