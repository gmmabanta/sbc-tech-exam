import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { updateSort } from "@/lib/slices/recipeSlice";
import { useDispatch } from "@/lib/store";

export default function Sort() {
  const dispatch = useDispatch();
  return (
    <>
      <Typography fontSize={20} fontWeight="bold" my={2}>
        Sort by Title
      </Typography>
      <Box>
        <FormControl fullWidth>
          <InputLabel id="select-label">Select</InputLabel>
          <Select
            defaultValue=""
            labelId="select-label"
            id="select"
            label="Select"
            onChange={(event) => {
              const value = event.target.value;
              dispatch(updateSort(value));
            }}
          >
            <MenuItem value={"asc"}>Ascending</MenuItem>
            <MenuItem value={"desc"}>Descending</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
