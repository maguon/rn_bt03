import {handleActions} from 'redux-actions';
import * as LoginActionType from '../../types/login/LoginActionType';

const initialState = {
  data: {
    user: {},
  },
};

export default handleActions(
  {
    [LoginActionType.loginInit]: (state, action) => {
      const {user} = action.payload;
      return {
        data: {
          user,
        },
      };
    },
  },
  initialState,
);
