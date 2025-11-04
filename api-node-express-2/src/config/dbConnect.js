import mongoose from "mongoose"

mongoose.connect("mongodb+srv://admin:admin123@studies.ni1mkbt.mongodb.net/?appName=Studies");

let db = mongoose.connection;

export default db;