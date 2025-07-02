import { useState } from "react";

import type { Order, User } from "../types/user.types";

type useUserT = {
  mockUsers: User[];
};

export function useUsers({ mockUsers }: useUserT) {
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof User>("name");
  const [users, setUsers] = useState<User[]>(mockUsers);

  const handleSort = () => {
    const isAsc = order === "asc";
    const sorted = [...users].sort((a, b) => {
      if (a.name < b.name) return isAsc ? -1 : 1;
      if (a.name > b.name) return isAsc ? 1 : -1;
      return 0;
    });

    setUsers(sorted);

    setOrder(isAsc ? "desc" : "asc");
  };

  return {
    users,
    order,
    orderBy,
    handleSort,
    setOrderBy,
  };
}
