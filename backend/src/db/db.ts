import { connect } from "mongoose";

const connectDB = async () => {
   try {
    const mongoURI = "mongoDB://localhost:27017/bookDb";
    await connect(mongoURI);
    console.log("MongoDB Connected...");
    } catch (err:any){
        console.error(err.message);
        // Exit process with fail
        process.exit(1);
    }
}

export default connectDB;