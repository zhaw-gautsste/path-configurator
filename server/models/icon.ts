import * as mongoose from "mongoose";

const iconSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    id: String,
    name: String,
    code: String,
    key: {key: String, name: String}
});

const Icon = mongoose.model("Icon", iconSchema);

export default Icon;
