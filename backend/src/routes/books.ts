import { Router } from "express";
import { addBook, deleteBook, getAllBooks, getBook, updateBook } from "../controllers/bookcontroller";

const bookRouter = Router();

bookRouter.get("/", getAllBooks);
bookRouter.post("/", addBook);
bookRouter.get("/", getBook);
bookRouter.put("/", updateBook);
bookRouter.delete("/", deleteBook);

export default bookRouter;