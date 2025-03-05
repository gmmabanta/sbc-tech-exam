import { Box, Typography, Button } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/router";
import FavoriteButton from "./FavoriteButton";
import { Recipe } from "@/data/recipe";

export default function ListItem({
  id,
  title,
  description,
  author,
  dateCreated,
  isFavorite,
  imageUrl,
}: Recipe) {
  const router = useRouter();
  const formattedDate = new Date(dateCreated).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Box
      sx={{
        borderRadius: 5,
        border: "1px solid black",
        width: "100%",
        height: "204px",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <FavoriteButton id={id} isFavorite={isFavorite} />
        <Image
          src={imageUrl ?? "/default-image.png"}
          alt="Recipe image"
          height={204}
          width={290}
          style={{ borderRadius: 20 }}
        />
      </Box>
      <Box
        m={2}
        flex={"auto"}
        sx={{ display: "flex", flexDirection: "column" }}
      >
        <Typography variant="h1" fontSize={45}>
          {title}
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: "2",
            WebkitBoxOrient: "vertical",
          }}
        >
          {description}
        </Typography>
        <Button
          sx={{
            textTransform: "none",
            padding: 0,
            color: "gray",
            mt: "5px",
            mb: "10px",
            px: "auto",
            justifyContent: "start",
            width: "min-content",
          }}
          onClick={() => {
            router.push(`/${id}`);
          }}
        >
          <Typography variant="caption" justifyContent="center">
            See more
          </Typography>
        </Button>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "auto",
          }}
        >
          <Typography>Author: {author}</Typography>
          <Typography>Date: {formattedDate}</Typography>
        </Box>
      </Box>
    </Box>
  );
}
