import * as express from "express";

import BaseCtrl from "./controllers/form";
import FormCtrl from "./controllers/form";
import PageCtrl from "./controllers/page";
import FormFieldCtrl from "./controllers/formfield";
import PageElementCtrl from "./controllers/pageelement";
import ColorCtrl from "./controllers/color";
import IconCtrl from "./controllers/icon";
import UserCtrl from "./controllers/user";
import TranslationCtrl from "./controllers/translation";
// import FileCtrl from "./controllers/file";
// import * as multer from "multer";
// const upload = multer({ dest: "uploads/" });

export default function setRoutes(app) {

    const router = express.Router();

    const baseCtrl = new BaseCtrl();
    const formCtrl = new FormCtrl();
    const pageCtrl = new PageCtrl();
    const formFieldCtrl = new FormFieldCtrl();
    const pageElementCtrl = new PageElementCtrl();
    const colorCtrl = new ColorCtrl();
    const iconCtrl = new IconCtrl();
    const userCtrl = new UserCtrl();
    const translationCtrl = new TranslationCtrl();
    // const fileCtrl = new FileCtrl();

    // Forms
    router.route("/form").get(formCtrl.getAll);
    router.route("/form").post(formCtrl.create);
    router.route("/form/:formKey").get(formCtrl.read);
    router.route("/form/:formKey").put(formCtrl.update);
    router.route("/form/:formKey").delete(formCtrl.delete);

    // Pages
    router.route("/page").get(pageCtrl.getAll);
    router.route("/page").post(pageCtrl.create);
    router.route("/page/:pageKey").get(pageCtrl.read);
    router.route("/page/:pageKey").put(pageCtrl.update);
    router.route("/page/:pageKey").delete(pageCtrl.delete);

    // Fields
    router.route("/field").get(formFieldCtrl.getAll);
    router.route("/form/:formKey/field").get(formFieldCtrl.getFormFieldButtons);
    router.route("/form/:formKey/preview").get(formFieldCtrl.getAllFields);
    router.route("/form/:formKey/field").post(formFieldCtrl.insertRefForm);
    router.route("/field").post(formFieldCtrl.create);
    router.route("/form/:formKey/field/:fieldKey").get(formFieldCtrl.read);
    router.route("/form/:formKey/field/:fieldKey").put(formFieldCtrl.update);
    router.route("/form/:formKey/field/:fieldKey").delete(formFieldCtrl.delete);

    // Elements
    router.route("/element").get(pageElementCtrl.getAll);
    router.route("/page/:pageKey/element").get(pageElementCtrl.getPageElementButtons);
    router.route("/page/:pageKey/preview").get(pageElementCtrl.getAllElements);
    router.route("/page/:pageKey/element").post(pageElementCtrl.insertRefPage);
    router.route("/element").post(pageElementCtrl.create);
    router.route("/page/:pageKey/element/:elementKey").get(pageElementCtrl.read);
    router.route("/page/:pageKey/element/:elementKey").put(pageElementCtrl.update);
    router.route("/page/:pageKey/element/:elementKey").delete(pageElementCtrl.delete);

    // Colors
    router.route("/color").get(colorCtrl.getAll);
    router.route("/color").post(colorCtrl.create);
    router.route("/color/:colorKey").get(colorCtrl.read);
    router.route("/color/:colorKey").put(colorCtrl.update);
    router.route("/color/:colorKey").delete(colorCtrl.delete);

    // Icons
    router.route("/icon").get(iconCtrl.getIconButtons);
    router.route("/icon").post(iconCtrl.create);
    router.route("/icon/:iconKey").get(iconCtrl.read);
    router.route("/icon/:iconKey").put(iconCtrl.update);
    router.route("/icon/:iconKey").delete(iconCtrl.delete);

    // Users
    router.route("/user").get(userCtrl.getAll);
    router.route("/user").post(userCtrl.create);
    router.route("/user/:userKey").get(userCtrl.read);
    router.route("/user/:userKey").put(userCtrl.update);
    router.route("/user/:userKey").delete(userCtrl.delete);

    // File Upload
    // router.route("/upload", upload.single("upload")).post(fileCtrl.create);
    // router.route("/upload-error", upload.single("upload")).post(fileCtrl.create);
    // router.route("/upload/:fileKey", upload.single("upload")).get(fileCtrl.read);

    // Translation
    router.route("/translation").get(translationCtrl.getAllTranslations);
    router.route("/translation").post(translationCtrl.create);
    router.route("/translation/:translationKey").get(translationCtrl.readTranslation);
    router.route("/translation/:translationKey").put(translationCtrl.update);
    router.route("/translation/:translationKey").delete(translationCtrl.delete);

    // Translation Export
    router.route("/translation-export").get(baseCtrl.exportTranslationFile);

    // JSON Export
    router.route("/json-export").get(baseCtrl.exportGUIModel);

    // Forms data as Mock data
    router.route("/*").get(formCtrl.getAll);

    // delete page elements (backbuttons)
    router.route("/delete-elements").get(baseCtrl.deleteElements);

    // delete form fields (ok, delete, cancel)
    router.route("/delete-fields").get(baseCtrl.deleteFields);

    // Apply the routes to our application with the prefix /services
    app.use("/services", router);

}
