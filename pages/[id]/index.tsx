import AddForm from "@/components/form/AddForm";
import GridLayout from "@/components/layout/GridLayout";
import Image from "next/image";

import { Box, Button, CircularProgress } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

import { Recipe } from "@/data/recipe";
import { useSelector } from "@/lib/store";
import { useRouter } from "next/router";

export default function RecipePage() {
  const router = useRouter();
  const id = router.query.id;
  const { listDetails } = useSelector((state) => state.recipe);
  const recipe = listDetails.find((x) => Number(x.id) == Number(id)) as Recipe;

  if (!recipe) {
    return (
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    );
  }
  return (
    <GridLayout
      leftGrid={
        <Box display="grid" gap={2}>
          <Button
            variant="text"
            startIcon={<ArrowBackIosNewIcon />}
            sx={{ justifySelf: "start" }}
            onClick={() => router.back()}
          >
            Back
          </Button>
          <Image
            src={recipe?.imageUrl ?? "/default-image.png"}
            alt="Default image"
            width={200}
            height={200}
          />
        </Box>
      }
      rightGrid={
        <>
          <AddForm recipe={recipe} />
        </>
      }
    />
  );
}
