import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import history from 'utils/history';
import USER_REDUCER from './user/user.reducer';
import DIAGNOSE_REDUCER from './diagnosis/diagnosis.reducer';

const rootReducer = combineReducers({
    router: connectRouter(history),
    user: USER_REDUCER,
    diagnosis: DIAGNOSE_REDUCER,
});

export default rootReducer;
