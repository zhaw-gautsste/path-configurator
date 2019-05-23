import Icon from "../models/icon";
import BaseCtrl from "./base";
import {PathButton} from "../data/path-button";
import {PathKey} from "../data/path-key";

export default class IconCtrl extends BaseCtrl {
  model = Icon;

    getEntityName(): string {
        return "icon";
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

    getIconButtons = async (req, res) => {
        // console.log("*** getIconButtons ***");
        try {
            const docs = await this.model.find({ });
            let result: any[] = [];
            const promises = [];
            for (const doc of docs) {
                const entry = new PathButton();
                const key: PathKey = new PathKey();
                key.key = doc._id;
                key.name = this.getEntityName() + "Key";
                entry.key = key;
                entry.details = [doc.code];
                entry.icon = doc.code;
                result.push(entry);
                promises.push(this.createPathButton(entry, doc));
            }
            result = await Promise.all(promises);
            res.json(result);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }
}
