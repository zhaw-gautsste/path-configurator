import FormField from "../models/formfield";
import BaseCtrl from "./base";
import {PathButton} from "../data/path-button";
import Form from "../models/form";
import {PathKey} from "../data/path-key";
import Translation from "../models/translation";

export default class FormFieldCtrl extends BaseCtrl {
  model = FormField;

    public static getFormNameOfType(type) {
        // console.log("*** getFormNameOfType ***");
        return type.charAt(0).toUpperCase() + type.slice(1) + "FieldForm";
    }

    getEntityName(): string {
        return "field";
    }

    getSearchAttributes(): string[] {
        return ["name"];
    }

    getSort(): any[] {
        return ["sortOrder"];
    }

    public async createPathButton(entry: PathButton, entity: any) {
        // console.log("*** createPathButton FormField ***");
        entry.details.push(entity.type);
        const FormName = FormFieldCtrl.getFormNameOfType(entity.type);
        entry.setForm(FormName);
        if (entity.nameRef !== undefined) {
            try {
                const transName = await Translation.findOne({_id: entity.nameRef});
                entry.name = transName.id;
            } catch (err) {
                entry.name = "n/a";
                entity.nameRef = "";
                entity.save();
            }
        }
        if (entity.name !== undefined) {
            entry.name = entity.name;
        }
        return super.createPathButton(entry, entity);
    }

    public getAllFields = async (req, res) => {
        // console.log("*** getAllFields ***");
        try {
            const formFound = await Form.findOne( { _id: req.params.formKey});
            const docs = await this.model.find({parentRef: formFound._id}).
            sort({sortOrder: 1});
            console.log(docs);
            docs.forEach(async function (doc) {
                if (doc.nameRef !== undefined) {
                    try {
                        const transName = await Translation.findOne({_id: doc.nameRef});
                        doc.name = transName.id;
                    } catch (err) {
                        doc.name = "n/a";
                        doc.nameRef = "";
                    }
                }
                doc.save();
            });
            res.status(200).json(docs);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    getFormFieldButtons = async (req, res) => {
        // console.log("*** getFormFieldButtons ***");
        try {
            const formFound = await Form.findOne({_id: req.params.formKey});
            if (formFound === null) {
                // it was deleted, no need to get elements then
                res.json({ok: true});
            } else {
                const docs = await this.model.find({parentRef: formFound._id});
                let result: any[] = [];
                const promises = [];
                for (const doc of docs) {
                    const entry = new PathButton();
                    const key: PathKey = new PathKey();
                    key.key = doc._id;
                    key.name = this.getEntityName() + "Key";
                    entry.key = key;
                    result.push(entry);
                    promises.push(this.createPathButton(entry, doc));
                }
                result = await Promise.all(promises);
                res.json(result);
            }
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

}
