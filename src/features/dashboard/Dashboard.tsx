import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Sheets } from "../sheet/Sheets";
import { dashboardAdded, selectDashboards } from "./dashboardSlice";
import { nanoid } from "@reduxjs/toolkit";

export function Dashboard() {
  const dashboards = useAppSelector(selectDashboards);
  const dispatch = useAppDispatch();

  const hangleAddDashboard = () => {
    dispatch(dashboardAdded(`dashboarf-title-${nanoid()}`));
  };

  return (
    <div>
      <div>
        <button onClick={hangleAddDashboard}>Add dashboard</button>
      </div>
      <div>
        <h2>DASHBOARDS</h2>
        {Object.values(dashboards).map((dashboard) => (
          <div key={dashboard.id}>
            <p>{`id: ${dashboard.id}`}</p>
            <p>{`title: ${dashboard.title}`}</p>
            <Sheets
              dashboardId={dashboard.id}
              sheetsIds={dashboard.sheetsIds}
            />
            <hr />
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}
