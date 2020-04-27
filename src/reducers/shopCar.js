import { reduxActions } from '../constants';

const initialState = {
  articles: [],
  showShoppingCar: false,
};

const shopCar = (state = initialState, action) => {
  switch (action.type) {
    case reduxActions.SHOW_SHOPPING_CAR:
      return {
        ...state,
        showShoppingCar: action.payload,
      };
    case reduxActions.ADD_ITEM:
      return {
        ...state,
        articles: [
          ...state.articles,
          {
            ...action.payload,
            id: state.articles.length,
          },
        ],
      };
    case reduxActions.DELETE_ITEM:
      return {
        ...state,
        articles: state.articles.filter(item => item.id !== action.payload),
      };
    case reduxActions.UPDATE_QUANTITY:
      return {
        ...state,
        articles: action.payload,
      };
    case reduxActions.DELETE_ALL:
      return initialState;
    default:
      return state;
  }
};

export default shopCar;
