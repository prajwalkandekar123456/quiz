import { combineReducers, configureStore } from "@reduxjs/toolkit";
import questionReducer from "./question_reducer";
import resultReducer from "./result_reducer";
/** call reducer */
const rootReducer = combineReducers({
  questions: questionReducer,
  result: resultReducer,
});

/**Create store with reducer */
export default configureStore({ reducer: rootReducer });
