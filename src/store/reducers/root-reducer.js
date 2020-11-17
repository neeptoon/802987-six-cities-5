import {combineReducers} from 'redux';
import {dataReducer} from './data-reducer/data-reducer';
import {appReducer} from './app-reducer/app-reducer';


const NameSpace = {
  DATA: `DATA`,
  APP: `APP`
};

export default combineReducers({
  [NameSpace.DATA]: dataReducer,
  [NameSpace.APP]: appReducer,
});
