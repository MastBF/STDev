import { combineReducers } from "redux";
import registrationReducer from "store/Auth/reducer";
import deleteReducer from "store/Delete/reducer";
const rootReducer = combineReducers({
  registration: registrationReducer,
  delete: deleteReducer,
});
export default rootReducer;
