import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';

import AppReducer from './layout/AppReducer';
import LoginReducer from './login/LoginReducer';

const messagePersistConfig = {
  key: 'message',
  storage: AsyncStorage,
};

export default combineReducers({AppReducer, LoginReducer});
