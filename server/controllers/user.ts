import User from "../models/user";
import BaseCtrl from "./base";

export default class UserCtrl extends BaseCtrl {
  model = User;

    getEntityName(): string {
        return "user";
    }

    getSearchAttributes(): string[] {
        return ["name"];
    }

    getSort(): any[] {
        return ["name"];
    }
}
