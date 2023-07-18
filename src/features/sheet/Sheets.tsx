import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { Sheet } from "./Sheet";
import { sheetAdded } from "./sheetSlice";

export function Sheets({
  dashboardId,
  sheetsIds,
}: {
  dashboardId: string;
  sheetsIds: string[];
}) {
  // const sheets = useAppSelector(selectSheets);
  const dispatch = useAppDispatch();

  const hangleAddSheet = () => {
    dispatch(sheetAdded(dashboardId));
  };

  return (
    <div>
      <div>
        <button onClick={hangleAddSheet}>Add Sheet</button>
      </div>
      <div>
        <h4>Sheets : </h4>
        {sheetsIds.map((sheetId) => (
          <Sheet sheetId={sheetId} dashboardId={dashboardId} key={sheetId} />
        ))}
      </div>
    </div>
  );
}
