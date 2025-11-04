import mongoose from "mongoose"

mongoose.connect(process.env.STRING_CONEXAP_DB);

let db = mongoose.connection;

export default db;