import { useAppSelector } from "../../app/hooks";
import { selectDashboardElementById } from "./dashboardElementSlice";

export function DashboardElement({
  dashboardElementId,
}: {
  dashboardElementId: string;
}) {
  const dashboardElement = useAppSelector((state) =>
    selectDashboardElementById(state, dashboardElementId)
  );

  return (
    <div
      style={{ border: "1px solid red", margin: "4px auto", maxWidth: "400px" }}
    >
      <p>{`id: ${dashboardElement.id}`}</p>
      <p>{`bgColor: ${dashboardElement.color}`}</p>
    </div>
  );
}
