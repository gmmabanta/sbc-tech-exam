import { InputAdornment } from "@mui/material";
import TextField from "../common/TextField";
import { Search } from "@mui/icons-material";
import { useDispatch } from "@/lib/store";
import { updateSearchText } from "@/lib/slices/recipeSlice";

export default function SearchBar() {
  const dispatch = useDispatch();
  return (
    <TextField
      id="search"
      placeholder="Search here..."
      sx={{
        position: "fixed",
        top: 0,
        right: 50,
        zIndex: 100,
        "& .MuiInputBase-input": {
          paddingRight: "30px",
          backgroundColor: "white",
        },
      }}
      endAdornment={
        <InputAdornment
          position="end"
          sx={{ marginLeft: "-30px", zIndex: 100 }}
        >
          <Search />
        </InputAdornment>
      }
      onChange={(event) => {
        const value = event.target.value;
        dispatch(updateSearchText(value));
      }}
    />
  );
}
