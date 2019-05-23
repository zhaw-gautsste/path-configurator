import * as mongoose from "mongoose";
import Page from "./page";
import Form from "./form";
import Translation from "./translation";
import Icon from "./icon";
import Color from "./color";

const pageElementSchema = new mongoose.Schema({
    // generic element attributes
    _id: {type: String, required: true},
    id: String,
    key: {key: String, name: String},
    parentRef: { type: String, ref: "Page" },
    nameRef: { type: String, ref: "Translation" },
    name: String,
    type: String,
    width: Number,
    visible: Boolean,
    newRow: Boolean,
    listElement: Boolean,
    // sort order for view on page
    sortOrder: Number,
    // button element attributes
    colorRef: { type: String, ref: "Color" },
    color: String,
    iconRef: { type: String, ref: "Icon" },
    icon: String,
    details: {type: [String], default: undefined},
    tooltip: String,
    url: String,
    pageRef: { type: String, ref: "Page" },
    page: String,
    formRef: {type: String, ref: "Form"},
    form: {form: String},
    // button group attributes
    buttons: {type: [JSON], default: undefined},
    // page-label
    value: String,
    // list
    buttonGroup: {type: [JSON], default: undefined},
    search: Boolean,
    searchColorRef: { type: String, ref: "Color" },
    searchColor: String,
    limit: Number,
    searchRequired: Boolean,
    searchRequest: Boolean,
    searchLabel: String,
    // chart
    data: String,
});

const PageElement = mongoose.model("PageElement", pageElementSchema);

export default PageElement;
