import { useAppSelector } from "../../app/hooks";
import { DashboardElements } from "../dashboardElement/DashboardElements";
import { selectSheetById } from "./sheetSlice";

export function Sheet({
  dashboardId,
  sheetId,
}: {
  dashboardId: string;
  sheetId: string;
}) {
  const sheet = useAppSelector((state) => selectSheetById(state, sheetId));

  return (
    <div
      style={{
        border: "1px solid blue",
        margin: "8px auto",
        maxWidth: "1000px",
      }}
    >
      <p>{`id: ${sheet.id}`}</p>
      <p>{`bgColor: ${sheet.bgColor}`}</p>
      <h5>Elements :</h5>
      <DashboardElements
        dashboardElementsIds={sheet.dashboardElementsIds}
        dashboardId={dashboardId}
        sheetId={sheetId}
      />
    </div>
  );
}
