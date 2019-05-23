import * as mongoose from "mongoose";
import Translation from "./translation";

const formSchema = new mongoose.Schema({
    _id: {type: String, required: true},
    id: String,
    nameRef: { type: String, ref: "Translation" },
    name: String,
    title: String,
    url: String,
    cancelButton: Boolean,
    okButton: Boolean,
    deleteButton: Boolean,
    cancelButtonSet: false,
    okButtonSet: false,
    deleteButtonSet: false,
    key: {key: String, name: String},
    formFieldList: [JSON]
});

const Form = mongoose.model("Form", formSchema);

export default Form;
