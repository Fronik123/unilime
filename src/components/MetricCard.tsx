import React from "react";
import { Card, CardContent, Typography } from "@mui/material";

interface MetricCardProps {
  title: string;
  value: string | number;
  description?: string;
}

const MetricCard: React.FC<MetricCardProps> = ({
  title,
  value,
  description,
}) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="subtitle1">{title}</Typography>

        <Typography variant="h4">{value}</Typography>

        {description && (
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        )}
      </CardContent>
    </Card>
  );
};

export default MetricCard;
