import React from "react";
import {
  Box,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  TableSortLabel,
  useTheme,
} from "@mui/material";
import { useUsers } from "../hooks/useUsers";
import type { User } from "../types/user.types";

const mockUsers: User[] = [
  {
    id: 1,
    name: "Isabella Mason",
    email: "isabella@example.com",
    phone: "+79 093 0320 32 123",
  },
  {
    id: 2,
    name: "Bob Smith",
    email: "bob@example.com",
    phone: "+79 093 0320 32 123",
  },
  {
    id: 3,
    name: "Charlie Brown",
    email: "charlie@example.com",
    phone: "+79 093 0320 32 123",
  },
  {
    id: 4,
    name: "Diana Prince",
    email: "diana@example.com",
    phone: "+79 093 0320 32 123",
  },
  {
    id: 5,
    name: "Ethan Hunt",
    email: "ethan@example.com",
    phone: "+79 093 0320 32 123",
  },
  {
    id: 6,
    name: "Mason Brown",
    email: "Mason@example.com",
    phone: "+79 093 0320 32 123",
  },
  {
    id: 7,
    name: "Fiona Gallagher",
    email: "fiona@example.com",
    phone: "+79 093 0320 32 123",
  },

  {
    id: 8,
    name: "Alice Johnson",
    email: "alice@example.com",
    phone: "+79 093 0320 32 123",
  },
];

const Users: React.FC = () => {
  const theme = useTheme();
  const { users, order, orderBy, handleSort } = useUsers({ mockUsers });

  return (
    <Box>
      <Typography variant="h3" mb={3} sx={{ color: theme.custom.primeryBlue }}>
        Users
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>

              <TableCell
                sortDirection={orderBy === "name" ? order : false}
                sx={{
                  cursor: "pointer",
                  backgroundColor: "transparent",
                  "&:hover": {
                    backgroundColor: theme.custom.primeryBlue,
                  },
                  "&:hover .MuiTableSortLabel-root": {
                    color: theme.custom.primeryWhite,
                  },
                  "&:hover .MuiSvgIcon-root": {
                    color: theme.custom.primeryWhite,
                  },
                }}
                onClick={handleSort}
              >
                <TableSortLabel active={orderBy === "name"} direction={order}>
                  Name
                </TableSortLabel>
              </TableCell>

              <TableCell>Email</TableCell>

              <TableCell>Phone</TableCell>
            </TableRow>
          </TableHead>

          <TableBody
            sx={{
              "& .MuiTableCell-root": {
                borderBottom: `1px solid ${theme.custom.primeryWhite}`,
              },
              "& .MuiTableRow-root:last-child .MuiTableCell-root": {
                borderBottom: "none",
              },
            }}
          >
            {users.map(({ id, name, email, phone }) => (
              <TableRow key={id}>
                <TableCell>{id}</TableCell>

                <TableCell>{name}</TableCell>

                <TableCell>{email}</TableCell>

                <TableCell>{phone}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Users;
