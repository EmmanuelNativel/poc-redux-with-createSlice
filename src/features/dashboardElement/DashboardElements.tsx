import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { DashboardElement } from "./DashboardElement";
import { dashboardElementAdded } from "./dashboardElementSlice";

export function DashboardElements({
  dashboardId,
  sheetId,
  dashboardElementsIds,
}: {
  dashboardId: string;
  sheetId: string;
  dashboardElementsIds: string[];
}) {
  const dispatch = useAppDispatch();

  const handleAddDashboardElement = () => {
    dispatch(dashboardElementAdded(dashboardId, sheetId));
  };

  return (
    <div>
      <div>
        <button onClick={handleAddDashboardElement}>Add Element</button>
      </div>
      <div>
        <h4>Sheets : </h4>
        {dashboardElementsIds.map((dashboardElementsId) => (
          <DashboardElement
            dashboardElementId={dashboardElementsId}
            key={dashboardElementsId}
          />
        ))}
      </div>
    </div>
  );
}
