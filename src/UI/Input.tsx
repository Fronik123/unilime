import { TextField, useTheme } from "@mui/material";

type InputT = {
  value: string;
  label: string;
  onChange: (val: string) => void;
};

const Input: React.FC<InputT> = ({ value, onChange, label }) => {
  const theme = useTheme();

  return (
    <TextField
      label={label}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      fullWidth
      margin="normal"
      sx={{
        "& .MuiOutlinedInput-root": {
          borderRadius: "16px",
        },
        "& .MuiInputLabel-root": {
          color: theme.custom.primaryBlack,
        },
        "& .MuiInputLabel-root.Mui-focused": {
          color: theme.custom.primeryBlue,
        },
        "& .MuiOutlinedInput-input": {
          color: theme.custom.primaryBlack,
        },
        background: theme.custom.primeryWhite,
        borderRadius: "16px",
      }}
    />
  );
};

export default Input;
