import path from "node:path";
import { readFile, writeFile } from "node:fs/promises";

const fileNameToReadFrom = "sample.txt";
const fileNameToWriteTo = "out.txt";

const fileContent = await readFile(path.resolve(fileNameToReadFrom));

if (process.permission.has("fs.write")) {
  await writeFile(path.resolve(fileNameToWriteTo), fileContent.toString(), {
    encoding: "utf8",
  });
  console.log(`write in "${fileNameToWriteTo}".`);
} else {
  console.error(`ERROR: You do not have access to write to "${fileNameToWriteTo}"\n`);
}
