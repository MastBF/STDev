import { combineReducers } from "redux";
import registrationReducer from "store/Auth/reducer";

const rootReducer = combineReducers({
    registration:registrationReducer,
});
export default rootReducer;
