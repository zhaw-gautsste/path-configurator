import * as mongoose from "mongoose";

const translationFileSchema = new mongoose.Schema({
    title: String,
    de: JSON,
    fr: JSON,
    it: JSON,
    en: JSON
});

const TranslationFile = mongoose.model("TranslationFile", translationFileSchema);

export default TranslationFile;
