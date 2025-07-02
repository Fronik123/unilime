import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
import MetricCard from "../components/MetricCard";

const Overview: React.FC = () => {
  const theme = useTheme();

  const data = [
    {
      title: "Active Users",
      value: 1240,
      description: "Users active this month",
    },
    { title: "Revenue", value: "$58,300", description: "Total revenue" },
    { title: "Server Uptime", value: "99.9%", description: "Last 30 days" },
  ];

  return (
    <Box>
      <Typography variant="h3" mb={3} sx={{ color: theme.custom.primeryBlue }}>
        Overview
      </Typography>

      <Box display="flex" flexWrap="wrap" gap={2}>
        {data.map((item, index) => (
          <Box key={index} flex="1 0 calc(33.33% - 16px)" minWidth="200px">
            <MetricCard
              title={item.title}
              value={item.value}
              description={item.description}
            />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Overview;
