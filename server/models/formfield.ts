import * as mongoose from "mongoose";
import Form from "./form";
import Translation from "./translation";

const formFieldSchema = new mongoose.Schema({
    // generic field attributes
    _id: {type: String, required: true},
    id: String,
    key: {key: String, name: String},
    parentRef: { type: String, ref: "Form" },
    nameRef: { type: String, ref: "Translation" },
    name: String,
    type: String,
    height: Number,
    width: Number,
    newRow: Boolean,
    visible: Boolean,
    labelVisible: Boolean,
    required: Boolean,
    readonly: Boolean,
    value: String,
    // sort order for view on form
    sortOrder: Number,
    // text field attributes
    maxLength: Number,
    isPassword: Boolean,
    // number field attributes
    min: Number,
    max: Number,
    digits: Number,
    // auto-complete
    dataLoaded: false,
    wordSearchEnabled: Boolean,
    valueSet: false,
    defaultKey: String,
    detailForm: String,
    keyType: String,
    url: String,
    // radio
    radios: {type: [JSON], default: undefined, required: false},
    radioValue1: {type: String, default: undefined},
    radioValue2: {type: String, default: undefined},
    radioValue3: {type: String, default: undefined},
    radioValue4: {type: String, default: undefined},
    // checkbox
    data: {type: [JSON], default: undefined, required: false},
    dataValue1: {type: String, default: undefined},
    dataValue2: {type: String, default: undefined},
    dataValue3: {type: String, default: undefined},
    dataValue4: {type: String, default: undefined},
    // file upload
    acceptedFileTypes: {type: [String], default: undefined, required: false},
});

const FormField = mongoose.model("FormField", formFieldSchema);

export default FormField;
