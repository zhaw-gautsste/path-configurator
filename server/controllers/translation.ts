import Translation from "../models/translation";
import BaseCtrl from "./base";
import {PathButton} from "../data/path-button";

export default class TranslationCtrl extends BaseCtrl {
  model = Translation;

    getEntityName(): string {
        return "translation";
    }

    getSearchAttributes(): string[] {
        return ["name"];
    }

    getSort(): any[] {
        return ["name"];
    }

    public createPathButton(entry: PathButton, entity: any): Promise<PathButton> {
        entry.name = entity.name;
        return super.createPathButton(entry, entity);
    }

    public getAllTranslations = async (req, res) => {
        // console.log("*** getAllTranslations ***");
        try {
            const docs = await this.model.find({}).
            sort({sortOrder: 1}).
            select("-__v -_id");
            docs.forEach(async function (doc) {
                if (doc.name === undefined) {
                    doc.name = "Id:" + doc.id +
                        " / E:" + doc.englishText +
                        " / D:" + doc.germanText +
                        " / I:" + doc.italianText +
                        " / F:" + doc.frenchText;
                }
            });
            res.status(200).json(docs);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    public readTranslation = async (req, res) => {
        // console.log("*** readTranslation ***");
        try {
            const Key = this.getEntityName() + "Key";
            const obj = await this.model.findOne({ _id: req.params[Key] }).
            sort({sortOrder: 1}).
            select("-__v -_id");
            res.status(200).json(obj);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

}
