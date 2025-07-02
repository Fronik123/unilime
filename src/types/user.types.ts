export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
}

export type Order = "asc" | "desc";

export interface SideBarItem {
  text: string;
  icon: React.ReactNode;
  path: string;
}
