import * as mongoose from "mongoose";

const guiModelSchema = new mongoose.Schema({
    title: String,
    formList: [JSON],
    pageList: [JSON]
});

const GuiModelFile = mongoose.model("GuiModelFile", guiModelSchema);

export default GuiModelFile;
