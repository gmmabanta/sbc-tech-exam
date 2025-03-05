import { Fab, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/router";

export default function AddButton() {
  const router = useRouter();
  return (
    <Box>
      <Fab
        color="primary"
        aria-label="add"
        onClick={() => {
          router.push("/add-recipe");
        }}
      >
        <AddIcon />
      </Fab>
    </Box>
  );
}
