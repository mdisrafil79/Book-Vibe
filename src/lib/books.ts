import { readFile } from "node:fs/promises";
import path from "node:path";
import { IBook } from "@/types/books.type";

export const getBooks = async (): Promise<IBook[]> => {
  try {
    const filePath = path.join(process.cwd(), "public", "booksData.json");
    const data = await readFile(filePath, "utf-8");
    return JSON.parse(data) as IBook[];
  } catch (error) {
    console.error("Error fetching books data:", error);
    return [];
  }
};
