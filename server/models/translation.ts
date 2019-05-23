import * as mongoose from "mongoose";

const translationSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    id: String,
    name: String,
    englishText: String,
    germanText: String,
    frenchText: String,
    italianText: String,
    key: {key: String, name: String}
});

const Translation = mongoose.model("Translation", translationSchema);

export default Translation;
