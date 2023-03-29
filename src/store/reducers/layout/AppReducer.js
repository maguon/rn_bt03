import {handleActions} from 'redux-actions';
import * as AppActionType from '../../types/layout/AppActiontype';

const initialState = {
  currentUser: {},
  darkMode: 'light',
  captchaId: '',
  captchaImage: '',
};

export default handleActions(
  {
    [AppActionType.setCurrentUser]: (state, action) => {
      return {
        ...state,
        currentUser: action.payload,
      };
    },
    [AppActionType.setCaptchaId]: (state, action) => {
      return {
        ...state,
        captchaId: action.payload,
      };
    },
    [AppActionType.setCaptchaImage]: (state, action) => {
      return {
        ...state,
        captchaImage: action.payload,
      };
    },
    [AppActionType.setToggleDarkMode]: (state, action) => {
      return {
        ...state,
        darkMode: action.payload,
      };
    },
  },
  initialState,
);
