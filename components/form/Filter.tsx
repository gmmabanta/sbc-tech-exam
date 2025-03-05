import {
  Box,
  FormGroup,
  FormControlLabel,
  FormLabel,
  Checkbox,
  Typography,
} from "@mui/material";
import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "@/lib/store";
import { updateFilter } from "@/lib/slices/recipeSlice";

export default function Filter() {
  const dispatch = useDispatch();
  const { filterByFave } = useSelector((state) => state.recipe);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    const booleanValue = value == "true" ? true : false;

    if (checked) {
      dispatch(updateFilter([...filterByFave, booleanValue]));
    } else {
      dispatch(updateFilter(filterByFave.filter((e) => e !== booleanValue)));
    }
  };

  return (
    <>
      <Typography fontSize={20} fontWeight="bold" my={2}>
        Filter
      </Typography>
      <Box sx={{ border: "1px solid black", borderRadius: 5, p: 3 }}>
        <FormGroup>
          <FormLabel>Favorites?</FormLabel>
          <FormControlLabel
            control={<Checkbox onChange={handleChange} defaultChecked />}
            label="Yes"
            value={true}
          />
          <FormControlLabel
            control={<Checkbox onChange={handleChange} defaultChecked />}
            label="No"
            value={false}
          />
        </FormGroup>
      </Box>
    </>
  );
}
