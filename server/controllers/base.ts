import {PathGroup} from "../data/path-group";
import {PathButton} from "../data/path-button";
import {PathKey} from "../data/path-key";
import {MongoDbDatabase} from "../database/mongodb-database";
import Form from "../models/form";
import Page from "../models/page";
import FormField from "../models/formfield";
import GuiModelFile from "../models/guimodel-file";
import TranslationFile from "../models/translation-file";
import PageElement from "../models/pageelement";
import Color from "../models/color";
import Icon from "../models/icon";
import Translation from "../models/translation";

abstract class BaseCtrl {

    protected static _database: MongoDbDatabase;

    abstract model: any;

    public static initDatabase() {
        this._database = new MongoDbDatabase();
    }

    public getAll = async (req, res) => {
        // console.log("*** getAll ***");
        const service = this;
        const entity = service.getEntityName();
        try {
            const docs = await this.model.find({}).
                sort({sortOrder: 1}).
                select("nameRef name id title key");
            let result: any;
            const promises = [];
            docs.forEach(function (doc) {
                if (doc.nameRef !== undefined) {
                    try {
                        const transName = Translation.findOne({_id: doc.nameRef});
                        if (entity === "form") {
                            doc.title = transName.id;
                            doc.name = transName.id;
                        } else {
                            doc.name = transName.id;
                        }
                    } catch (err) {
                        doc.name = undefined;
                        doc.nameRef = undefined;
                    }
                }
                if (doc.name === undefined) {
                    doc.name = doc.title;
                }
                doc.save();
                const entry = new PathButton();
                const key: PathKey = new PathKey();
                key.key = doc._id;
                key.name = service.getEntityName() + "Key";
                entry.key = key;
                promises.push(service.createPathButton(entry, doc));
            });
            result = await Promise.all(promises);
            res.status(200).json(result);
        } catch (err) {
            return res.status(400).json({error: err.message});
        }
    }

    public deleteElements = async (req, res) => {
        const elements = await PageElement.deleteMany({type: "backbutton"});
        const pages = await Page.updateMany({}, {backButtonSet: false});
        res.status(200).json(elements);
    }

    public deleteFields = async (req, res) => {
        const fields = await FormField.deleteMany( {type: { $in: ["okButton", "cancelButton", "deleteButton"]}} );
        const forms = await Form.updateMany({}, {$set: {okButtonSet: false, cancelButtonSet: false, deleteButtonSet: false} });
        res.status(200).json(fields);
    }

    public generateForm = async () => {
        // console.log("*** generateForm ***");
        const service = this;
        const forms = await Form.find({}).
        select("id nameRef name title url formFieldList cancelButton okButton deleteButton cancelButtonSet okButtonSet deleteButtonSet");
        forms.forEach(async function (form) {
            if (form.cancelButton && !form.cancelButtonSet) {
                const cancelButton = new FormField();
                cancelButton.type = "cancelButton";
                cancelButton.name = "Cancel";
                cancelButton.sortOrder = 0;
                cancelButton.parentRef = form._id;
                cancelButton._id = "field_" + service.generateUUID();
                cancelButton.key = {key: cancelButton._id, name: "fieldKey"};
                await cancelButton.save();
                form.cancelButtonSet = true;
            }
            if (form.okButton && !form.okButtonSet) {
                const okButton = new FormField();
                okButton.type = "okButton";
                okButton.name = "Ok";
                okButton.sortOrder = 0;
                okButton.parentRef = form._id;
                okButton._id = "field_" + service.generateUUID();
                okButton.key = {key: okButton._id, name: "fieldKey"};
                await okButton.save();
                form.okButtonSet = true;
            }
            if (form.deleteButton && !form.deleteButtonSet) {
                const deleteButton = new FormField();
                deleteButton.type = "deleteButton";
                deleteButton.name = "Delete";
                deleteButton.sortOrder = 0;
                deleteButton.parentRef = form._id;
                deleteButton._id = "field_" + service.generateUUID();
                deleteButton.key = {key: deleteButton._id, name: "fieldKey"};
                await deleteButton.save();
                form.deleteButtonSet = true;
            }
            const docs = await FormField.find({parentRef: form._id}).
                sort({sortOrder: 1});
            docs.forEach(async function (doc) {
                if (doc.nameRef !== undefined) {
                    await Translation.findOne({_id: doc.nameRef}).
                    select("id").
                    exec().
                    then(tempTranslation => {
                        if (tempTranslation !== null) {
                            doc.name = tempTranslation.id;
                            doc.title = tempTranslation.id;
                        }
                    });
                }
                if (doc.type === "RadioGroupField") {
                    const radios1 = {};
                    const radios2 = {};
                    const radios3 = {};
                    const radios4 = {};
                    doc.radios = [];
                    if (doc.radioValue1 !== undefined && doc.radioValue1 !== "") {
                        radios1["type"] = "radio";
                        radios1["name"] = doc.radioValue1;
                        radios1["key"] = 1;
                        doc.radios.push(radios1);
                    }
                    if (doc.radioValue2 !== undefined && doc.radioValue2 !== "") {
                        radios2["type"] = "radio";
                        radios2["name"] = doc.radioValue2;
                        radios2["key"] = 2;
                        doc.radios.push(radios2);
                    }
                    if (doc.radioValue3 !== undefined && doc.radioValue3 !== "") {
                        radios3["type"] = "radio";
                        radios3["name"] = doc.radioValue3;
                        radios3["key"] = 3;
                        if (radios3 !== null) {
                            doc.radios.push(radios3);
                        }
                    }
                    if (doc.radioValue4 !== undefined && doc.radioValue4 !== "") {
                        radios4["type"] = "radio";
                        radios4["name"] = doc.radioValue4;
                        radios4["key"] = 4;
                        if (radios4 !== null) {
                            doc.radios.push(radios4);
                        }
                    }
                }
                if (doc.type === "CheckboxGroupField") {
                    const data1 = {};
                    const data2 = {};
                    const data3 = {};
                    const data4 = {};
                    doc.data = [];
                    if (doc.dataValue1 !== undefined && doc.dataValue1 !== "") {
                        data1["name"] = doc.dataValue1;
                        data1["key"] = 1;
                        doc.data.push(data1);
                    }
                    if (doc.dataValue2 !== undefined && doc.dataValue2 !== "") {
                        data2["name"] = doc.dataValue2;
                        data2["key"] = 2;
                        doc.data.push(data2);
                    }
                    if (doc.dataValue3 !== undefined && doc.dataValue3 !== "") {
                        data3["name"] = doc.dataValue3;
                        data3["key"] = 3;
                        if (data3 !== null) {
                            doc.data.push(data3);
                        }
                    }
                    if (doc.dataValue4 !== undefined && doc.dataValue4 !== "") {
                        data4["name"] = doc.dataValue4;
                        data4["key"] = 4;
                        if (data4 !== null) {
                            doc.data.push(data4);
                        }
                    }
                }
                await doc.save();
            });
            const fields = await FormField.find({parentRef: form._id}).
                sort({sortOrder: 1}).
                select("-_id -__v -parentRef -nameRef -iconRef -colorRef -searchColorRef -pageRef -formRef " +
                    "-key -sortOrder -radioValue1 -radioValue2 -radioValue3 -radioValue4 " +
                    "-dataValue1 -dataValue2 -dataValue3 -dataValue4");
            form.formFieldList = [].concat.apply([], fields);
            await form.save();
        });
    }

    public generatePage = async () => {
        // console.log("*** generatePage ***");
        const service = this;
        const pages = await Page.find({}).
            select("id nameRef name elementList backbutton backButtonSet");
        pages.forEach(async function (page) {
            if (page.backbutton && !page.backButtonSet) {
                const backButtonElement = new PageElement();
                backButtonElement.type = "backbutton";
                backButtonElement.name = "BackButton";
                backButtonElement.sortOrder = 0;
                backButtonElement.parentRef = page._id;
                backButtonElement._id = "element_" + service.generateUUID();
                backButtonElement.key = {key: backButtonElement._id, name: "elementKey"};
                await backButtonElement.save();
                page.backButtonSet = true;
            }
            const docs = await PageElement.find({parentRef: page._id}).
                sort({sortOrder: 1}).
                select("id nameRef iconRef colorRef pageRef formRef name icon color page form");
            docs.forEach(async function (doc) {
                if (doc.pageRef !== undefined) {
                    await Page.findOne({_id: doc.pageRef}).
                    select("id").
                    exec().
                    then(tempPage => {
                        if (tempPage !== null) {
                            doc.page = tempPage.id;
                        }
                    });
                }
                if (doc.formRef !== undefined) {
                    await Form.findOne({_id: doc.formRef}).
                    select("id").
                    exec().
                    then(tempForm => {
                        if (tempForm !== null) {
                            doc.form.form = tempForm.id;
                        }
                    });
                }
                if (doc.nameRef !== undefined) {
                    await Translation.findOne({_id: doc.nameRef}).
                        select("id").
                        exec().
                        then(tempTranslation => {
                            if (tempTranslation !== null) {
                                doc.name = tempTranslation.id;
                            }
                        });
                }
                if (doc.iconRef !== undefined) {
                    await Icon.findOne({_id: doc.iconRef}).
                        select("id").
                        exec().
                        then(tempIcon => {
                            if (tempIcon !== null) {
                                doc.icon = tempIcon.code;
                            }
                        });
                }
                if (doc.colorRef !== undefined) {
                    await Color.findOne({_id: doc.colorRef}).
                        select("id").
                        exec().
                        then(tempColor => {
                            if (tempColor !== null) {
                                doc.color = tempColor.code;
                            }
                        });
                }
                if (doc.searchColorRef !== undefined) {
                    await Color.findOne({_id: doc.searchColorRef}).
                    select("id").
                    exec().
                    then(tempSearchColor => {
                        if (tempSearchColor !== null) {
                            doc.searchColor = tempSearchColor.code;
                        }
                    });
                }
                await doc.save();
            });
            const elements = await PageElement.find({parentRef: page._id}).
                sort({sortOrder: 1}).
                select("-_id -__v -parentRef -nameRef -iconRef -colorRef -searchColorRef -pageRef -formRef -key -sortOrder");
            if (page.id === "mainMenu") {
                page.id = "mainmenu";
            }
            page.elementList = [].concat.apply([], elements);
            await page.save();
        });
    }

    public exportGUIModel = async (req, res) => {
        try {
            // console.log("*** exportGUIModel ***");
            await this.generateForm();
            await this.generatePage();
            const forms = await Form.find({}).
                select("-_id id title url formFieldList");
            const pages = await Page.find({}).
                select("-_id id name elementList");
            const guiModel = new GuiModelFile();
            guiModel.title = "My new app";
            guiModel.formList = [].concat.apply([], forms);
            guiModel.pageList = [].concat.apply([], pages);
            guiModel.save();
            return res.status(200).json(guiModel);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    public exportTranslationFile = async (req, res) => {
        // console.log("*** exportTranslationFile ***");
        try {
            const docs = await Translation.find({}).
                sort({id: -1}).
                select("-_id");
            const translationFile = new TranslationFile();
            translationFile.title = "My new app";
            const englishTexts = {};
            const germanTexts = {};
            const italianTexts = {};
            const frenchTexts = {};
            await docs.forEach(function (doc) {
                if (doc.englishText !== undefined) {
                    englishTexts[doc.id] = doc.englishText;
                }
                if (doc.germanText !== undefined) {
                    germanTexts[doc.id] = doc.germanText;
                }
                if (doc.italianText !== undefined) {
                    italianTexts[doc.id] = doc.italianText;
                }
                if (doc.frenchText !== undefined) {
                    frenchTexts[doc.id] = doc.frenchText;
                }
            });
            translationFile.en = englishTexts;
            translationFile.de = germanTexts;
            translationFile.it = italianTexts;
            translationFile.fr = frenchTexts;
            translationFile.save();
            return res.status(200).json(translationFile);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    public abstract getEntityName(): string;

    public abstract getSearchAttributes(): string[];

    protected abstract getSort(): any[];

    public list(): Promise <any> {
        // console.log("*** list ***");
        const service = this;
        return BaseCtrl._database.allDocs(service.getEntityName()).then((rows) => {
            const result: PathButton[] = [];
            const compare = (a, b) => {
                for (const sort of service.getSort()) {
                    if (a[sort] < b[sort]) {
                        return -1;
                    } else if (a[sort] > b[sort]) {
                        return 1;
                    }
                }
                return 0;
            };
            rows.sort(compare);
            return rows;
        });
    }

    private generateUUID() {
        // console.log("*** generateUUID ***");
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            // tslint:disable:no-bitwise
            const r = Math.random() * 16 | 0, v = c === "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

    public insertRefPage = async (req, res) => {
        // console.log("*** insertRefPage ***");
        try {
            const service = this;
            req.body._id = service.getEntityName() + "_" + service.generateUUID();
            req.body.key = {key: req.body._id, name: service.getEntityName() + "Key"};
            req.body.page = await Page.findOne({_id: req.body.pageRef});
            const obj = await new this.model(req.body).save();
            return res.status(201).json(obj);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    public insertRefForm = async (req, res) => {
        // console.log("*** insertRefForm ***");
        try {
            const service = this;
            req.body._id = service.getEntityName() + "_" + service.generateUUID();
            req.body.key = {key: req.body._id, name: service.getEntityName() + "Key"};
            req.body.form = await Form.findOne({_id: req.body.formRef});
            const obj = await new this.model(req.body).save();
            return res.status(201).json(obj);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    public prepareCreate(): Promise < any > {
        // console.log("*** prepareCreate ***");
        return Promise.resolve("{}");
    }

    public create = async (req, res) => {
        // console.log("*** create ***");
        try {
            const service = this;
            req.body._id = service.getEntityName() + "_" + service.generateUUID();
            req.body.key = {key: req.body._id, name: service.getEntityName() + "Key"};
            const obj = await new this.model(req.body).save();
            return res.status(201).json(obj);
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    public read = async (req, res) => {
        // console.log("*** read ***");
        try {
            const Key = this.getEntityName() + "Key";
            const doc = await this.model.findOne({ _id: req.params[Key] });
            if (doc.name === undefined) {
                doc.name = doc.title;
            }
            return res.status(200).json(doc);
        } catch (err) {
            return res.status(500).json({ error: err.message });
        }
    }

    public update = async (req, res) => {
         // console.log("*** update ***");
        try {
            const Key = this.getEntityName() + "Key";
            await this.model.updateOne({ _id: req.params[Key] }, req.body, {returnNewDocument: true});
            console.log(req.body);
            return res.status(200).json({ok: true});
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    public delete = async (req, res) => {
         // console.log("*** delete ***");
        try {
            const Key = this.getEntityName() + "Key";
            await this.model.deleteOne({ _id: req.params[Key] });
            return res.status(200).json({ok: true});
        } catch (err) {
            return res.status(400).json({ error: err.message });
        }
    }

    public createPathButtonList(rows, res) {
        // console.log("*** createPathButtonList ***");
        const service = this;
        const promises = [];
        for (const item of rows) {
            const entry: PathButton = new PathButton();
            entry.key = service.createPathKey(item, service);
            promises.push(service.createPathButton(entry, item));
        }
        return Promise.all(promises).then((result) => {
                res.json(result);
            }
        ).catch((err) => {
            console.log(err);
        });
    }

    public createPathGroupList(rows, additionalButtons: PathButton[], res) {
        // console.log("*** createPathGroupList ***");
        const service = this;
        const result: PathGroup[] = [];
        const promises = [];
        for (const item of rows) {
            // group
            const group: PathGroup = new PathGroup();
            group.key = this.createPathKey(item, service);
            // first button
            const entry: PathButton = new PathButton();
            entry.key = this.createPathKey(item, service);
            // additional buttons
            for (const additionalButton of additionalButtons) {
                const newAdditionalButton = additionalButton.clone();
                newAdditionalButton.key = entry.key;
                group.buttons.push(newAdditionalButton);
            }
            promises.push(service.createPathButton(entry, item));
            result.push(group);
        }
        Promise.all(promises).then((buttons) => {
                let counter = 0;
                for (const button of buttons) {
                    result[counter].buttons.unshift(button);
                    counter++;
                }
                res.json(result);
            }
        ).catch((err) => {
            console.log(err);
        });
    }

    private createPathKey(item, service): PathKey {
        // console.log("*** createPathKey ***");
        const key: PathKey = new PathKey();
        key.key = item._id;
        if (item.id) {
            key.key = item.id;
        }
        key.name = service.getEntityName() + "Key";
        return key;
    }

    public createPathButton(entry: PathButton, entity: any): Promise <PathButton> {
        // console.log("*** createPathButton Base ***");
        return new Promise((resolve) => {
            resolve(entry);
        });
    }

    public toComplexKey(...keys: any[]): any {
        // console.log("*** toComplexKey ***");
        let complexKey = "complex_";
        for (const key of keys) {
            complexKey += "_" + key;
        }
        return complexKey;
    }

}

export default BaseCtrl;
