import { alpha, styled } from "@mui/material/styles";

import {
  FormHelperText,
  FormControl,
  InputBase,
  InputLabel,
  InputBaseProps,
} from "@mui/material";

const StyledInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    border: "1px solid #E0E3E7",
    fontSize: 16,
    padding: "10px 12px",
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
  "& .MuiInputBase-root": {
    backgroundColor: "white",
  },
}));

export default function TextField({
  id,
  placeholder,
  label,
  defaultValue,
  error,
  ...rest
}: {
  id: string;
  placeholder: string;
  label?: string;
  defaultValue?: string;
  error?: string | boolean;
} & InputBaseProps) {
  return (
    <FormControl variant="standard">
      <InputLabel shrink htmlFor={id}>
        {label}
      </InputLabel>
      <StyledInput
        aria-describedby={`${id}-text`}
        placeholder={placeholder}
        defaultValue={defaultValue}
        id={id}
        color={error ? "error" : undefined}
        {...rest}
      />
      <FormHelperText id={`${id}-text`}>{error}</FormHelperText>
    </FormControl>
  );
}
