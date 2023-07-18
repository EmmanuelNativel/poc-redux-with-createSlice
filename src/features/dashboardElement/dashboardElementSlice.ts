import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { DashboardElement } from "../../types/types";

export type DashboardElementState = Record<string, DashboardElement>;

const initialState: DashboardElementState = {};

export const dashboardElementSlice = createSlice({
  name: "dashboardElement",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    dashboardElementAdded: {
      reducer(
        state,
        action: PayloadAction<{
          dashboardId: string;
          sheetId: string;
          dashboardElement: DashboardElement;
        }>
      ) {
        state[action.payload.dashboardElement.id] =
          action.payload.dashboardElement;
      },
      prepare(dashboardId: string, sheetId: string) {
        return {
          payload: {
            dashboardId,
            sheetId,
            dashboardElement: {
              id: nanoid(),
              color: "red",
            },
          },
        };
      },
    },
  },
});

export const { dashboardElementAdded } = dashboardElementSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectDashboardElements = (state: RootState) =>
  state.dashboardRoot.present.dashboardElements;

export const selectDashboardElementById = (
  state: RootState,
  dashboardElementId: string
) => state.dashboardRoot.present.dashboardElements[dashboardElementId];

export default dashboardElementSlice.reducer;
