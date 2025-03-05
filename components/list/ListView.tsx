import { Box, Typography } from "@mui/material";
import AddButton from "./AddButton";
import ListItem from "./ListItem";
import SearchBar from "./SearchBar";
import { Recipe } from "@/data/recipe";

export default function ListView({ list }: { list: Array<Recipe> }) {
  return (
    <>
      <SearchBar />
      <Box
        sx={{
          borderRadius: 5,
          boxShadow: "0px 0px 3px gray",
          backgroundColor: "white",
          width: "100%",
          minHeight: "75vh",
          display: "flex",
          rowGap: 10,
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        {list && list.length > 0 ? (
          <>
            <Box sx={{ zIndex: 5, top: 20, right: 20, position: "absolute" }}>
              <AddButton />
            </Box>
            <Box
              sx={{
                width: "-webkit-fill-available",
                alignSelf: "start",
                padding: 5,
                display: "grid",
                flexDirection: "column",
                gap: 5,
              }}
            >
              {list.map((item) => (
                <ListItem key={item.id} {...item} />
              ))}
            </Box>
          </>
        ) : (
          <>
            <Box sx={{ zIndex: 5, top: 20, right: 20, position: "absolute" }}>
              <AddButton />
            </Box>
            <Typography
              variant="body1"
              sx={{ fontSize: 45, fontWeight: "bold" }}
            >
              No Record Found!
            </Typography>
          </>
        )}
      </Box>
    </>
  );
}
