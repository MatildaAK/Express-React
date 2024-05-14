import express, { Express, Request, Response} from "express";
import cors from "cors";
import bookRouter from "./routes/books";
import connectDB from "./db/db";
import sportRouter from "./routes/sports";


const app: Express = express();

connectDB;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.use("/api/books", bookRouter);
app.use("/api/sports", sportRouter);

app.get("/", (req: Request, res: Response) =>{
    res.send("Express + TypeScript Server")
});

export default app;