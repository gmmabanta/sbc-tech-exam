import { StarOutline, Star } from "@mui/icons-material";
import { useState } from "react";
import { IconButton } from "@mui/material";
import { useDispatch } from "@/lib/store";
import { updateFavoriteRecipe } from "@/lib/slices/recipeSlice";

export default function FavoriteButton({
  id,
  isFavorite,
}: {
  id: number;
  isFavorite: boolean;
}) {
  const dispatch = useDispatch();
  const [isFave, setFavorite] = useState(isFavorite);

  return (
    <IconButton
      sx={{ color: "#FFFF00", position: "absolute", top: 5, right: 5 }}
      onClick={() => {
        setFavorite(!isFave);
        dispatch(updateFavoriteRecipe(id));
      }}
    >
      {isFavorite ? (
        <Star fontSize="large" />
      ) : (
        <StarOutline fontSize="large" />
      )}
    </IconButton>
  );
}
