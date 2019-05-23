import * as mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    name: String,
    password: String,
    key: {key: String, name: String}
});

const User = mongoose.model("User", userSchema);

export default User;
