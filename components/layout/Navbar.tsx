import { Box } from "@mui/material";

export default function Navbar() {
  return (
    <Box
      sx={{
        margin: 0,
        padding: 0,
        top: 0,
        width: "100vw",
        height: "90px",
        backgroundColor: "#5469B4",
        position: "fixed",
        zIndex: 10,
      }}
    ></Box>
  );
}
