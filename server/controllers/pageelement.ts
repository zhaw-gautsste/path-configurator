import PageElement from "../models/pageelement";
import BaseCtrl from "./base";
import {PathButton} from "../data/path-button";
import Page from "../models/page";
import Form from "../models/form";
import Translation from "../models/translation";
import Icon from "../models/icon";
import Color from "../models/color";
import {PathKey} from "../data/path-key";

export default class PageElementCtrl extends BaseCtrl {
    model = PageElement;

    public static getFormNameOfType(type) {
        // console.log("*** getFormNameOfType ***");
        return type.charAt(0).toUpperCase() + type.slice(1) + "ElementForm";
    }

    public getEntityName(): string {
        return "element";
    }

    public getSearchAttributes(): string[] {
        return ["name"];
    }

    protected getSort(): any[] {
        return ["sortOrder"];
    }

    public async createPathButton(entry: PathButton, entity: any) {
        // console.log("*** createPathButton PageElement ***");
        entry.details.push(entity.type);
        const FormName = PageElementCtrl.getFormNameOfType(entity.type);
        entry.setForm(FormName);

        if (entity.nameRef !== undefined) { // && entity.nameRef.startsWith("translation_")) {
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

    public getAllElements = async (req, res) => {
        // console.log("*** getAllElements ***");
        try {
            const pageFound = await Page.findOne({_id: req.params.pageKey});
            const docs = await this.model.find({parentRef: pageFound._id}).sort({sortOrder: 1});
            docs.forEach(async function (doc) {
                if (doc.nameRef !== undefined && doc.nameRef !== null) { // && doc.nameRef.startsWith("translation_")) {
                    const resTrans = await Translation.findOne({_id: doc.nameRef});
                    doc.name = resTrans.id;
                    console.log(resTrans.id);
                }
                if (doc.iconRef !== undefined && doc.iconRef !== null) { // && doc.iconRef.startsWith("icon_")) {
                    const resIcon = await Icon.findOne({_id: doc.iconRef});
                    doc.icon = resIcon.code;
                    console.log(resIcon.code);
                }
                if (doc.colorRef !== undefined && doc.colorRef !== null) { // && doc.colorRef.startsWith("color_")) {
                    const resColor = await Color.findOne({_id: doc.colorRef});
                    doc.color = resColor.code;
                    console.log(resColor.code);
                }
                if (doc.searchColorRef !== undefined && doc.searchColorRef !== null) { // && doc.colorRef.startsWith("color_")) {
                    const resSearchColor = await Color.findOne({_id: doc.searchColorRef});
                    doc.searchColor = resSearchColor.code;
                    console.log(resSearchColor.code);
                }
                if (doc.pageRef !== undefined && doc.pageRef !== null) { // && doc.pageRef.startsWith("page_")) {
                    const resPage = await Page.findOne({_id: doc.pageRef});
                    doc.page = resPage.id;
                    console.log(resPage.id);
                }
                if (doc.formRef !== undefined && doc.formRef !== null) { // && doc.formRef.startsWith("form_")) {
                    const resForm = await Form.findOne({_id: doc.formRef});
                    doc.form.form = resForm.id;
                    console.log(resForm.id);
                }
                await doc.save();
            });
            res.status(200).json(docs);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    public getPageElementButtons = async (req, res) => {
        // console.log("*** getPageElementButtons ***");
        try {
            const pageFound = await Page.findOne( { _id: req.params.pageKey});
            if (pageFound === null) {
                // it was deleted, no need to get elements then
                res.json({ok: true});
            } else {
                const docs = await this.model.find({parentRef: pageFound._id});
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

    public async addPageElement(pageKey, elementKey): Promise<any> {
        // console.log("*** addPageElement ***");
        const key: any = this.model.toComplexKey(pageKey, elementKey);
        return BaseCtrl._database.update(key, {pageKey: pageKey, elementKey: elementKey});
    }

    public async removePageElement(pageKey, elementKey): Promise<any> {
        // console.log("*** removePageElement ***");
        const key = this.model.toComplexKey(pageKey, elementKey);
        return BaseCtrl._database.delete(key);
    }

}
