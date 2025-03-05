import AddForm from "@/components/form/AddForm";
import GridLayout from "@/components/layout/GridLayout";
import Image from "next/image";

import { Box, Button } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { styled } from "@mui/material/styles";

import { useRouter } from "next/router";
const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function AddRecipePage() {
  const router = useRouter();
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
          <>
            <Image
              src={"/default-image.png"}
              alt="Default image"
              width={200}
              height={200}
              onClick={() => {
                document.getElementById("imageInput")?.click();
              }}
            />
            <VisuallyHiddenInput
              id={"imageInput"}
              type="file"
              onChange={async (event) => {
                const files = event.target.files;
                const body = new FormData();

                if (files) {
                  const element = files[0];
                  body.append("file", element);
                  // body.set("file", element);

                  // Not working
                  await fetch("/api/upload", {
                    method: "POST",
                    body,
                  })
                    .then((response) => response.json())
                    .then((data) => console.log(data));
                }
              }}
            />
          </>
        </Box>
      }
      rightGrid={
        <>
          <AddForm />
        </>
      }
    />
  );
}
