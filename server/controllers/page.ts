import Page from "../models/page";
import BaseCtrl from "./base";
import {PathButton} from "../data/path-button";
import Translation from "../models/translation";

export default class PageCtrl extends BaseCtrl {
  model = Page;

    getEntityName(): string {
        return "page";
    }

    getSearchAttributes(): string[] {
        return ["name"];
    }

    getSort(): any[] {
        return ["name"];
    }

    public async createPathButton(entry: PathButton, entity: any): Promise<PathButton> {
        // console.log("*** createPathButton Page ***");
        entry.details.push("ID: " + entity.id);
        if (entity.nameRef !== undefined && entity.nameRef !== null) {
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
