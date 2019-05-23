import * as mongoose from "mongoose";

const colorSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    id: String,
    name: String,
    code: String,
    key: {key: String, name: String}
});

const Color = mongoose.model("Color", colorSchema);

export default Color;
