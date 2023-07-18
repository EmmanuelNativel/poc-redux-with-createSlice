import {
  configureStore,
  ThunkAction,
  Action,
  combineReducers,
} from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
import dashboardReducer from "../features/dashboard/dashboardSlice";
import dashboardElementReducer from "../features/dashboardElement/dashboardElementSlice";
import sheetReducer from "../features/sheet/sheetSlice";
import undoable from "redux-undo";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    dashboardRoot: undoable(
      combineReducers({
        dashboards: dashboardReducer,
        sheets: sheetReducer,
        dashboardElements: dashboardElementReducer,
      })
    ),
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
