import  {createStore, applyMiddleware,combineReducers} from 'redux';
import createLogger from 'redux-logger';
import toDoApp from './modules/toDoApp';
import detailListRequest from './modules/detail';
const  loggrMiddleware = createLogger;
const  createStoreWithMiddleware = applyMiddleware(loggrMiddleware)(createStore);
const  reducer = combineReducers({toDoApp,detailListRequest});
const  configureStore =(initialState) => createStoreWithMiddleware(reducer,initialState);
export default  configureStore;