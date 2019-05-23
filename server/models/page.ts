import * as mongoose from "mongoose";
import Translation from "./translation";

const pageSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    id: String,
    nameRef: { type: String, ref: "Translation" },
    name: String,
    backbutton: Boolean,
    backButtonSet: false,
    key: {key: String, name: String},
    elementList: [JSON]
});

const Page = mongoose.model("Page", pageSchema);

export default Page;
