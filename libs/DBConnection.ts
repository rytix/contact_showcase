import { Mongoose } from "mongoose";
import connection from "./_DBConnection.js";

type DBConnectionType = () => Promise<Mongoose>;

let DBConnection : DBConnectionType = connection;
export default DBConnection