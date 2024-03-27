import { combineReducers } from 'redux';
import registrationReducer from 'store/Auth/reducer';
import deleteReducer from 'store/Delete/reducer';
import dateReducer from 'store/Data/reducer';
import successMessage from 'store/Success/reducers';

const rootReducer = combineReducers({
  registration: registrationReducer,
  delete: deleteReducer,
  data: dateReducer,
  success: successMessage,
});
export default rootReducer;
