import Form from "../models/form";
import BaseCtrl from "./base";
import {PathButton} from "../data/path-button";
import Translation from "../models/translation";

export default class FormCtrl extends BaseCtrl {
  model = Form;

    getEntityName(): string {
        return "form";
    }

    getSearchAttributes(): string[] {
        return ["title"];
    }

    getSort(): any[] {
        return ["title"];
    }

    public async createPathButton(entry: PathButton, entity: any): Promise<PathButton> {
        // console.log("*** createPathButton Form ***");
        // console.log(entity);
        entry.details.push("ID: " + entity.id);
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

}
