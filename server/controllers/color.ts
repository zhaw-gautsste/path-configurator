import Color from "../models/color";
import BaseCtrl from "./base";
import {PathButton} from "../data/path-button";

export default class ColorCtrl extends BaseCtrl {
  model = Color;

    getEntityName(): string {
        return "color";
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
}
