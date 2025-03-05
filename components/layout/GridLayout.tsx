import { Grid2 as Grid, Box, Snackbar } from "@mui/material";
import { ReactNode } from "react";
import { useSelector, useDispatch } from "@/lib/store";
import { updateToastInfo } from "@/lib/slices/recipeSlice";

export default function GridLayout({
  leftGrid,
  rightGrid,
}: {
  leftGrid?: ReactNode;
  rightGrid: ReactNode;
}) {
  const dispatch = useDispatch();
  const { toastInfo } = useSelector((state) => state.recipe);

  return (
    <>
      <Grid size={4}>
        <Box m={2} position="sticky" top={110}>
          {leftGrid}
        </Box>
      </Grid>
      <Grid size={8}>
        <Box m={2}>{rightGrid}</Box>
      </Grid>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={toastInfo.display}
        onClose={() => {
          dispatch(updateToastInfo({ display: false }));
        }}
        autoHideDuration={1000}
        message={toastInfo.message}
      />
    </>
  );
}
