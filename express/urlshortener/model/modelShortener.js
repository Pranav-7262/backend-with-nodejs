import { readFile, writeFile } from "fs/promises";
import path from "path";
const DATA_FILE = path.join("data", "links.json");

export const saveLinks = async (links) => {
  await writeFile(DATA_FILE, JSON.stringify(links));
};

export const loadLinks = async () => {
  try {
    const data = await readFile(DATA_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    //creation of file if not exists
    if (error.code === "ENOENT") {
      await writeFile(DATA_FILE, JSON.stringify({}));
      return {};
    }
    throw error;
  }
};
