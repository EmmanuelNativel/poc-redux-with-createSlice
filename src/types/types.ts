export interface Dashboard {
  id: string;
  title: string;
  sheetsIds: string[];
}

export interface Sheet {
  id: string;
  bgColor: string;
  dashboardElementsIds: string[];
}

export interface DashboardElement {
  id: string;
  color: string;
}
