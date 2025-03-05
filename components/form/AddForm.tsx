import { Box, Button, InputAdornment, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useForm, SubmitHandler } from "react-hook-form";
import { styled } from "@mui/material/styles";
import { CheckCircle, Cancel } from "@mui/icons-material";
import { Recipe } from "@/data/recipe";
import { useDispatch } from "@/lib/store";
import { useSelector } from "@/lib/store";
import {
  deleteRecipe,
  updateRecipe,
  addRecipe,
  updateToastInfo,
} from "@/lib/slices/recipeSlice";
import { useState } from "react";

const StyledButton = styled(Button)({
  width: "145px",
  color: "white",
  justifySelf: "end",
  boxShadow: "0px 0px 3px gray",
});

type Inputs = {
  author: string;
  email: string;
  description: string;
  title: string;
  ingredients: string;
  instructions: string;
};

const toastMessages = {
  uniqueTitle: "Recipe must have unique title.",
  successfulSave: "Successfully updated recipe.",
};

export default function AddForm({ recipe }: { recipe?: Recipe }) {
  const router = useRouter();
  const isEdit = router.pathname.includes("add-recipe") ? false : true;
  const dispatch = useDispatch();
  const { listDetails } = useSelector((state) => state.recipe);

  const [toastInfo, setToastInfo] = useState<{
    display: boolean;
    message?: string;
  }>({ display: false });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isDirty },
  } = useForm<Inputs>({
    defaultValues: {
      author: recipe?.author ?? "",
      email: recipe?.email ?? "",
      title: recipe?.title ?? "",
      description: recipe?.description ?? "",
      ingredients: recipe?.ingredients ?? "",
      instructions: recipe?.instructions ?? "",
    },
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const checkUniqueTitle = (title: string) => {
    const indexDuplicate = listDetails.findIndex((x) => x.title == title);
    return indexDuplicate == -1 ? true : false;
  };

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (isEdit) {
      const id = router.query.id;
      dispatch(updateRecipe({ ...data, id: id }));
      dispatch(
        updateToastInfo({
          display: true,
          message: toastMessages.successfulSave,
        })
      );
      router.back();
    } else {
      if (checkUniqueTitle(data.title)) {
        dispatch(addRecipe(data));
        router.back();
      } else {
        dispatch(
          updateToastInfo({ display: true, message: toastMessages.uniqueTitle })
        );
      }
    }
  };

  return (
    <Box
      component="form"
      sx={{ display: "grid", gap: 2, py: 2 }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        id="author"
        placeholder="Text field data"
        label="Your Name"
        error={Boolean(errors.author)}
        color={errors.author ? "error" : undefined}
        sx={{ "& .MuiInputBase-root": { backgroundColor: "white" } }}
        slotProps={{
          input: {
            endAdornment: Boolean(getValues("author")) ? (
              <InputAdornment position="end">
                <CheckCircle color="success" />
              </InputAdornment>
            ) : Boolean(errors.author) ? (
              <InputAdornment position="end">
                <Cancel color="error" />
              </InputAdornment>
            ) : undefined,
          },
        }}
        {...register("author", { required: true })}
      />
      <TextField
        id="email"
        placeholder="Text field data"
        label="Email Address"
        error={Boolean(errors.email)}
        helperText={errors.email?.message ?? ""}
        color={errors.email ? "error" : undefined}
        sx={{ "& .MuiInputBase-root": { backgroundColor: "white" } }}
        slotProps={{
          input: {
            endAdornment: Boolean(
              getValues("email") && !Boolean(errors.email)
            ) ? (
              <InputAdornment position="end">
                <CheckCircle color="success" />
              </InputAdornment>
            ) : Boolean(errors.email) ? (
              <InputAdornment position="end">
                <Cancel color="error" />
              </InputAdornment>
            ) : undefined,
          },
        }}
        {...register("email", {
          required: true,
          pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
            message: "Invalid email address format",
          },
        })}
      />
      <TextField
        id="title"
        placeholder="Text field data"
        label="Title"
        error={Boolean(errors.title)}
        color={errors.title ? "error" : undefined}
        sx={{ "& .MuiInputBase-root": { backgroundColor: "white" } }}
        slotProps={{
          input: {
            endAdornment: Boolean(getValues("title")) ? (
              <InputAdornment position="end">
                <CheckCircle color="success" />
              </InputAdornment>
            ) : Boolean(errors.title) ? (
              <InputAdornment position="end">
                <Cancel color="error" />
              </InputAdornment>
            ) : undefined,
          },
        }}
        disabled={isEdit}
        {...register("title", { required: true })}
      />
      <TextField
        id="description"
        placeholder="Text field data"
        label="Description"
        minRows={3}
        multiline
        error={Boolean(errors.description)}
        color={errors.description ? "error" : undefined}
        sx={{ "& .MuiInputBase-root": { backgroundColor: "white" } }}
        slotProps={{
          input: {
            endAdornment: Boolean(getValues("description")) ? (
              <InputAdornment position="end">
                <CheckCircle color="success" />
              </InputAdornment>
            ) : Boolean(errors.description) ? (
              <InputAdornment position="end">
                <Cancel color="error" />
              </InputAdornment>
            ) : undefined,
          },
        }}
        {...register("description", { required: true })}
      />
      <TextField
        id="ingredients"
        placeholder="Text field data"
        label="Ingredients"
        minRows={5}
        multiline
        error={Boolean(errors.ingredients)}
        color={errors.ingredients ? "error" : undefined}
        sx={{ "& .MuiInputBase-root": { backgroundColor: "white" } }}
        slotProps={{
          input: {
            endAdornment: Boolean(getValues("ingredients")) ? (
              <InputAdornment position="end">
                <CheckCircle color="success" />
              </InputAdornment>
            ) : Boolean(errors.ingredients) ? (
              <InputAdornment position="end">
                <Cancel color="error" />
              </InputAdornment>
            ) : undefined,
          },
        }}
        {...register("ingredients")}
      />
      <TextField
        id="instructions"
        placeholder="Text field data"
        label="Instructions"
        minRows={5}
        multiline
        error={Boolean(errors.instructions)}
        color={errors.instructions ? "error" : undefined}
        sx={{ "& .MuiInputBase-root": { backgroundColor: "white" } }}
        slotProps={{
          input: {
            endAdornment: Boolean(getValues("instructions")) ? (
              <InputAdornment position="end">
                <CheckCircle color="success" />
              </InputAdornment>
            ) : Boolean(errors.instructions) ? (
              <InputAdornment position="end">
                <Cancel color="error" />
              </InputAdornment>
            ) : undefined,
          },
        }}
        {...register("instructions")}
      />
      <Box
        sx={{
          justifySelf: "flex-end",
          display: "flex",
          gap: 2,
        }}
      >
        {isEdit && (
          <StyledButton
            variant="contained"
            sx={{ backgroundColor: "#EE6400" }}
            onClick={async () => {
              if (recipe?.id) {
                dispatch(deleteRecipe(recipe.id));
                router.replace("/");
              }
            }}
          >
            Delete
          </StyledButton>
        )}
        <StyledButton
          variant="contained"
          sx={{ backgroundColor: "#435490" }}
          disabled={!isDirty}
          type="submit"
        >
          Save
        </StyledButton>
      </Box>
    </Box>
  );
}
