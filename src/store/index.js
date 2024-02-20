import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";
import { MainReducer } from "./MainReucer";
import { UpdateReducer } from "./UpdateReducer";

export const store = createStore(
  combineReducers({
    main: MainReducer,
    update:UpdateReducer,
  }),
  composeWithDevTools(applyMiddleware(thunk))
);
