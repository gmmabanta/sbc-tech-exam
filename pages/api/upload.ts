import { NextResponse } from "next/server";
import path from "path";
import { writeFile } from "fs/promises";

export const config = {
  runtime: 'edge',
};
 
export default async function handler(
  req: Request,
  res: Response
) {
  if(req.method == "POST") {
    const data = await req.json();
    const formData = await req.formData();

  const file = formData.get("file") as File;
  if (!file) {
    return NextResponse.json({ error: "No files received." }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename =  file.name.replaceAll(" ", "_");
  console.log(filename);
  try {
    await writeFile(
      path.join(process.cwd(), "public/assets/" + filename),
      buffer
    );
    return NextResponse.json({ Message: "Success", status: 201 });
  } catch (error) {
    console.log("Error occured ", error);
    return NextResponse.json({ Message: "Failed", status: 500 });
  }
  }
}