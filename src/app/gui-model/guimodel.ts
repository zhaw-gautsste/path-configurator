/* tslint:disable:max-line-length */
export class GuiModel {

    private _guiModel = {
        "application": {
            "title": "Path Configurator App",
            "formList": [
                {
                    "id": "PageForm",
                    "title": "Pages",
                    "url": "/page",
                    "formFieldList": [
                        {
                            "id": "id",
                            "type": "text",
                            "name": "Id",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "nameRef",
                            "type": "autocomplete",
                            "name": "Name",
                            "width": 2,
                            "required": true,
                            "wordSearchEnabled": true,
                            "form": "TranslationForm",
                            "url": "/translation",
                            "defaultKey": "translationKey"
                        },
                        {   "id": "backButton",
                            "type": "RadioGroupField",
                            "name": "BackButton",
                            "width": 1,
                            "value": true,
                            "horizontal": true,
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "yes",
                                    "key": "true"
                                },
                                {
                                    "type": "radio",
                                    "name": "no",
                                    "key": "false"
                                }
                            ]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ButtonElementForm",
                    "title": "NewButtonElement",
                    "url": "/page/:pageKey/element",
                    "formFieldList": [
                        {
                            "id": "parentRef",
                            "type": "autocomplete",
                            "name": "Page",
                            "wordSearchEnabled": true,
                            "url": "/page",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "visible": true,
                            "defaultKey": "pageKey"
                        },
                        {
                            "id": "nameRef",
                            "type": "autocomplete",
                            "name": "Name",
                            "width": 2,
                            "required": true,
                            "wordSearchEnabled": true,
                            "form": "TranslationForm",
                            "url": "/translation",
                            "defaultKey": "translationKey"
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 1,
                            "min": 1,
                            "max": 100,
                            "digits": 0,
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "width",
                            "type": "number",
                            "name": "Width",
                            "width": 1,
                            "min": 1,
                            "max": 3,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "iconRef",
                            "type": "autocomplete",
                            "name": "Icon",
                            "width": 2,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "IconForm",
                            "url": "/icon",
                            "defaultKey": "iconKey"
                        },
                        {
                            "id": "colorRef",
                            "type": "autocomplete",
                            "name": "Color",
                            "width": 2,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "ColorForm",
                            "url": "/color",
                            "defaultKey": "colorKey"
                        },
                        {
                            "id": "formRef",
                            "type": "autocomplete",
                            "name": "Form",
                            "width": 2,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "FormForm",
                            "url": "/form",
                            "defaultKey": "formKey"
                        },
                        {
                            "id": "pageRef",
                            "type": "autocomplete",
                            "name": "Page",
                            "width": 2,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "PageForm",
                            "url": "/page"
                        },
                        {
                            "id": "type",
                            "type": "text",
                            "name": "Type",
                            "value": "button",
                            "visible": false,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "NewButtonElementForm",
                    "title": "NewNewButtonElement",
                    "url": "/page/:pageKey/element",
                    "formFieldList": [
                        {
                            "id": "parentRef",
                            "type": "autocomplete",
                            "name": "Page",
                            "wordSearchEnabled": true,
                            "url": "/page",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "visible": true,
                            "defaultKey": "pageKey"
                        },
                        {
                            "id": "nameRef",
                            "type": "autocomplete",
                            "name": "Name",
                            "width": 2,
                            "required": true,
                            "wordSearchEnabled": true,
                            "form": "TranslationForm",
                            "url": "/translation",
                            "defaultKey": "translationKey"
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 1,
                            "min": 1,
                            "max": 100,
                            "digits": 0,
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "width",
                            "type": "number",
                            "name": "Width",
                            "width": 1,
                            "min": 1,
                            "max": 3,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "iconRef",
                            "type": "autocomplete",
                            "name": "Icon",
                            "width": 2,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "IconForm",
                            "url": "/icon",
                            "defaultKey": "iconKey"
                        },
                        {
                            "id": "colorRef",
                            "type": "autocomplete",
                            "name": "Color",
                            "width": 2,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "ColorForm",
                            "url": "/color",
                            "defaultKey": "colorKey"
                        },
                        {
                            "id": "formRef",
                            "type": "autocomplete",
                            "name": "Form",
                            "width": 2,
                            "required": true,
                            "wordSearchEnabled": true,
                            "form": "FormForm",
                            "url": "/form",
                            "defaultKey": "formKey"
                        },
                        {
                            "id": "type",
                            "type": "text",
                            "name": "Type",
                            "value": "newButton",
                            "visible": false,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "LinkButtonElementForm",
                    "title": "NewLinkButtonElement",
                    "url": "/page/:pageKey/element",
                    "formFieldList": [
                        {
                            "id": "parentRef",
                            "type": "autocomplete",
                            "name": "Page",
                            "wordSearchEnabled": true,
                            "url": "/page",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "visible": true,
                            "defaultKey": "pageKey"
                        },
                        {
                            "id": "nameRef",
                            "type": "autocomplete",
                            "name": "Name",
                            "width": 2,
                            "required": true,
                            "wordSearchEnabled": true,
                            "form": "TranslationForm",
                            "url": "/translation",
                            "defaultKey": "translationKey"
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 1,
                            "min": 1,
                            "max": 100,
                            "digits": 0,
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "width",
                            "type": "number",
                            "name": "Width",
                            "width": 1,
                            "min": 1,
                            "max": 3,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "iconRef",
                            "type": "autocomplete",
                            "name": "Icon",
                            "width": 2,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "IconForm",
                            "url": "/icon",
                            "defaultKey": "iconKey"
                        },
                        {
                            "id": "colorRef",
                            "type": "autocomplete",
                            "name": "Color",
                            "width": 2,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "ColorForm",
                            "url": "/color",
                            "defaultKey": "colorKey"
                        },
                        {
                            "id": "url",
                            "type": "text",
                            "name": "Url",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "type",
                            "type": "text",
                            "name": "Type",
                            "value": "linkButton",
                            "visible": false,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ListElementForm",
                    "title": "NewListElement",
                    "url": "/page/:pageKey/element",
                    "formFieldList": [
                        {
                            "id": "parentRef",
                            "type": "autocomplete",
                            "name": "Page",
                            "wordSearchEnabled": true,
                            "url": "/page",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "visible": true,
                            "defaultKey": "pageKey"
                        },
                        {
                            "id": "nameRef",
                            "type": "autocomplete",
                            "name": "Name",
                            "width": 2,
                            "required": true,
                            "wordSearchEnabled": true,
                            "form": "TranslationForm",
                            "url": "/translation",
                            "defaultKey": "translationKey"
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 1,
                            "min": 1,
                            "max": 100,
                            "digits": 0,
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "width",
                            "type": "number",
                            "name": "Width",
                            "width": 1,
                            "min": 1,
                            "max": 3,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "iconRef",
                            "type": "autocomplete",
                            "name": "Icon",
                            "width": 2,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "IconForm",
                            "url": "/icon",
                            "defaultKey": "iconKey"
                        },
                        {
                            "id": "colorRef",
                            "type": "autocomplete",
                            "name": "Color",
                            "width": 2,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "ColorForm",
                            "url": "/color",
                            "defaultKey": "colorKey"
                        },
                        {
                            "id": "formRef",
                            "type": "autocomplete",
                            "name": "Form",
                            "width": 2,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "FormForm",
                            "url": "/form",
                            "defaultKey": "formKey"
                        },
                        {
                            "id": "pageRef",
                            "type": "autocomplete",
                            "name": "Page",
                            "width": 2,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "PageForm",
                            "url": "/page"
                        },
                        {
                            "id": "url",
                            "type": "text",
                            "name": "Url",
                            "width": 2,
                            "required": true
                        },
                        {   "id": "search",
                            "type": "RadioGroupField",
                            "name": "Search",
                            "width": 1,
                            "horizontal": true,
                            "value": true,
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "Yes",
                                    "key": "true"
                                },
                                {
                                    "type": "radio",
                                    "name": "No",
                                    "key": "false"
                                }
                            ]
                        },
                        {   "id": "searchColorRef",
                            "type": "autocomplete",
                            "name": "SearchColor",
                            "width": 1,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "ColorForm",
                            "url": "/color",
                            "defaultKey": "colorKey"
                        },
                        {   "id": "newRow",
                            "type": "RadioGroupField",
                            "name": "NewRow",
                            "width": 1,
                            "horizontal": true,
                            "value": true,
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "Yes",
                                    "key": "true"
                                },
                                {
                                    "type": "radio",
                                    "name": "No",
                                    "key": "false"
                                }
                            ]
                        },
                        {
                            "id": "type",
                            "type": "text",
                            "name": "Type",
                            "value": "list",
                            "visible": false,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ElementListElementForm",
                    "title": "NewElementListElement",
                    "url": "/page/:pageKey/element",
                    "formFieldList": [
                        {
                            "id": "parentRef",
                            "type": "autocomplete",
                            "name": "Page",
                            "wordSearchEnabled": true,
                            "url": "/page",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "visible": true,
                            "defaultKey": "pageKey"
                        },
                        {
                            "id": "nameRef",
                            "type": "autocomplete",
                            "name": "Name",
                            "width": 2,
                            "required": true,
                            "wordSearchEnabled": true,
                            "form": "TranslationForm",
                            "url": "/translation",
                            "defaultKey": "translationKey"
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 1,
                            "min": 1,
                            "max": 100,
                            "digits": 0,
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "width",
                            "type": "number",
                            "name": "Width",
                            "width": 1,
                            "min": 1,
                            "max": 3,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "iconRef",
                            "type": "autocomplete",
                            "name": "Icon",
                            "width": 2,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "IconForm",
                            "url": "/icon",
                            "defaultKey": "iconKey"
                        },
                        {
                            "id": "colorRef",
                            "type": "autocomplete",
                            "name": "Color",
                            "width": 2,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "ColorForm",
                            "url": "/color",
                            "defaultKey": "colorKey"
                        },
                        {
                            "id": "url",
                            "type": "text",
                            "name": "Url",
                            "width": 2,
                            "required": true
                        },
                        {   "id": "search",
                            "type": "RadioGroupField",
                            "name": "Search",
                            "width": 1,
                            "horizontal": true,
                            "value": true,
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "Yes",
                                    "key": "true"
                                },
                                {
                                    "type": "radio",
                                    "name": "No",
                                    "key": "false"
                                }
                            ]
                        },
                        {   "id": "searchColor",
                            "type": "autocomplete",
                            "name": "SearchColor",
                            "width": 1,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "ColorForm",
                            "url": "/color",
                            "defaultKey": "colorKey"
                        },
                        {   "id": "newRow",
                            "type": "RadioGroupField",
                            "name": "NewRow",
                            "width": 1,
                            "horizontal": true,
                            "value": true,
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "Yes",
                                    "key": "true"
                                },
                                {
                                    "type": "radio",
                                    "name": "No",
                                    "key": "false"
                                }
                            ]
                        },
                        {
                            "id": "type",
                            "type": "text",
                            "name": "Type",
                            "value": "elementList",
                            "visible": false,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ButtonGroupElementForm",
                    "title": "NewButtonGroupElement",
                    "url": "/page/:pageKey/element",
                    "formFieldList": [
                        {
                            "id": "parentRef",
                            "type": "autocomplete",
                            "name": "Page",
                            "wordSearchEnabled": true,
                            "url": "/page",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "visible": true,
                            "defaultKey": "pageKey"
                        },
                        {
                            "id": "nameRef",
                            "type": "autocomplete",
                            "name": "Name",
                            "width": 2,
                            "required": true,
                            "wordSearchEnabled": true,
                            "form": "TranslationForm",
                            "url": "/translation",
                            "defaultKey": "translationKey"
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 1,
                            "min": 1,
                            "max": 100,
                            "digits": 0,
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "width",
                            "type": "number",
                            "name": "Width",
                            "width": 1,
                            "min": 1,
                            "max": 3,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "iconRef",
                            "type": "autocomplete",
                            "name": "Icon",
                            "width": 2,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "IconForm",
                            "url": "/icon",
                            "defaultKey": "iconKey"
                        },
                        {
                            "id": "colorRef",
                            "type": "autocomplete",
                            "name": "Color",
                            "width": 2,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "ColorForm",
                            "url": "/color",
                            "defaultKey": "colorKey"
                        },
                        {
                            "id": "url",
                            "type": "text",
                            "name": "Url",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "type",
                            "type": "text",
                            "name": "Type",
                            "value": "buttonGroup",
                            "visible": false,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "BreadCrumbElementForm",
                    "title": "NewBreadCrumbElement",
                    "url": "/page/:pageKey/element",
                    "formFieldList": [
                        {
                            "id": "parentRef",
                            "type": "autocomplete",
                            "name": "Page",
                            "wordSearchEnabled": true,
                            "url": "/page",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "visible": true,
                            "defaultKey": "pageKey"
                        },
                        {
                            "id": "nameRef",
                            "type": "autocomplete",
                            "name": "Name",
                            "width": 2,
                            "required": true,
                            "wordSearchEnabled": true,
                            "form": "TranslationForm",
                            "url": "/translation",
                            "defaultKey": "translationKey"
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 1,
                            "min": 1,
                            "max": 100,
                            "digits": 0,
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "width",
                            "type": "number",
                            "name": "Width",
                            "width": 1,
                            "min": 1,
                            "max": 3,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "iconRef",
                            "type": "autocomplete",
                            "name": "Icon",
                            "width": 2,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "IconForm",
                            "url": "/icon",
                            "defaultKey": "iconKey"
                        },
                        {
                            "id": "colorRef",
                            "type": "autocomplete",
                            "name": "Color",
                            "width": 2,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "ColorForm",
                            "url": "/color",
                            "defaultKey": "colorKey"
                        },
                        {
                            "id": "url",
                            "type": "text",
                            "name": "Url",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "type",
                            "type": "text",
                            "name": "Type",
                            "value": "breadcrumb",
                            "visible": false,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "PageLabelElementForm",
                    "title": "NewPageLabelElement",
                    "url": "/page/:pageKey/element",
                    "formFieldList": [
                        {
                            "id": "parentRef",
                            "type": "autocomplete",
                            "name": "Page",
                            "wordSearchEnabled": true,
                            "url": "/page",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "visible": true,
                            "defaultKey": "pageKey"
                        },
                        {
                            "id": "nameRef",
                            "type": "autocomplete",
                            "name": "Name",
                            "width": 2,
                            "required": true,
                            "wordSearchEnabled": true,
                            "form": "TranslationForm",
                            "url": "/translation",
                            "defaultKey": "translationKey"
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 1,
                            "min": 1,
                            "max": 100,
                            "digits": 0,
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "width",
                            "type": "number",
                            "name": "Width",
                            "width": 1,
                            "min": 1,
                            "max": 3,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "iconRef",
                            "type": "autocomplete",
                            "name": "Icon",
                            "width": 2,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "IconForm",
                            "url": "/icon",
                            "defaultKey": "iconKey"
                        },
                        {
                            "id": "colorRef",
                            "type": "autocomplete",
                            "name": "Color",
                            "width": 2,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "ColorForm",
                            "url": "/color",
                            "defaultKey": "colorKey"
                        },
                        {
                            "id": "value",
                            "type": "text",
                            "name": "Value",
                            "width": 2,
                            "required": true
                        },
                        {   "id": "newRow",
                            "type": "RadioGroupField",
                            "name": "NewRow",
                            "value": true,
                            "horizontal": true,
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "yes",
                                    "key": "true"
                                },
                                {
                                    "type": "radio",
                                    "name": "no",
                                    "key": "false"
                                }
                            ]
                        },
                        {   "id": "newRow",
                            "type": "RadioGroupField",
                            "name": "NewRow",
                            "width": 1,
                            "horizontal": true,
                            "value": true,
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "Yes",
                                    "key": "true"
                                },
                                {
                                    "type": "radio",
                                    "name": "No",
                                    "key": "false"
                                }
                            ]
                        },
                        {
                            "id": "type",
                            "type": "text",
                            "name": "Type",
                            "value": "pageLabel",
                            "visible": false,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ChartElementForm",
                    "title": "NewChartElement",
                    "url": "/page/:pageKey/element",
                    "formFieldList": [
                        {
                            "id": "parentRef",
                            "type": "autocomplete",
                            "name": "Page",
                            "wordSearchEnabled": true,
                            "url": "/page",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "visible": true,
                            "defaultKey": "pageKey"
                        },
                        {
                            "id": "nameRef",
                            "type": "autocomplete",
                            "name": "Name",
                            "width": 2,
                            "required": true,
                            "wordSearchEnabled": true,
                            "form": "TranslationForm",
                            "url": "/translation",
                            "defaultKey": "translationKey"
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 1,
                            "min": 1,
                            "max": 100,
                            "digits": 0,
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "width",
                            "type": "number",
                            "name": "Width",
                            "width": 1,
                            "min": 1,
                            "max": 3,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "iconRef",
                            "type": "autocomplete",
                            "name": "Icon",
                            "width": 2,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "IconForm",
                            "url": "/icon",
                            "defaultKey": "iconKey"
                        },
                        {
                            "id": "colorRef",
                            "type": "autocomplete",
                            "name": "Color",
                            "width": 2,
                            "required": false,
                            "wordSearchEnabled": true,
                            "form": "ColorForm",
                            "url": "/color",
                            "defaultKey": "colorKey"
                        },
                        {
                            "id": "url",
                            "type": "text",
                            "name": "Url",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "data",
                            "type": "text",
                            "name": "Data",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "type",
                            "type": "text",
                            "name": "Type",
                            "value": "ChartElement",
                            "visible": false,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },


                {
                    "id": "FormForm",
                    "title": "Forms",
                    "url": "/form",
                    "formFieldList": [
                        {
                            "id": "id",
                            "type": "text",
                            "name": "Id",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "nameRef",
                            "type": "autocomplete",
                            "name": "Title",
                            "width": 2,
                            "required": true,
                            "wordSearchEnabled": true,
                            "form": "TranslationForm",
                            "url": "/translation",
                            "defaultKey": "translationKey"
                        },
                        {
                            "id": "url",
                            "type": "text",
                            "name": "Url",
                            "value": "/",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "title",
                            "type": "text",
                            "name": "TitleName",
                            "width": 2,
                            "value": "",
                            "visible": false
                        },
                        {   "id": "cancelButton",
                            "type": "RadioGroupField",
                            "name": "CancelButton",
                            "width": 1,
                            "horizontal": true,
                            "value": true,
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "yes",
                                    "key": "true"
                                },
                                {
                                    "type": "radio",
                                    "name": "no",
                                    "key": "false"
                                }
                            ]
                        },
                        {   "id": "okButton",
                            "type": "RadioGroupField",
                            "name": "OkButton",
                            "width": 1,
                            "horizontal": true,
                            "value": true,
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "yes",
                                    "key": "true"
                                },
                                {
                                    "type": "radio",
                                    "name": "no",
                                    "key": "false"
                                }
                            ]
                        },
                        {   "id": "deleteButton",
                            "type": "RadioGroupField",
                            "name": "DeleteButton",
                            "width": 1,
                            "horizontal": true,
                            "value": true,
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "yes",
                                    "key": "true"
                                },
                                {
                                    "type": "radio",
                                    "name": "no",
                                    "key": "false"
                                }
                            ]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "FormPreview",
                    "title": "Preview",
                    "formFieldList": [
                        {
                            "type": "fieldList",
                            "name": "Name",
                            "width": 2,
                            "url": "/form/:formKey/preview"
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "BackButtonElementForm",
                    "title": "BackButtonElement",
                    "url": "/page/:pageKey/element",
                    "formFieldList": [
                        {
                            "id": "parentRef",
                            "type": "autocomplete",
                            "name": "Page",
                            "wordSearchEnabled": true,
                            "url": "/page",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "visible": true,
                            "defaultKey": "pageKey"
                        },
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Name",
                            "value": "BackButton",
                            "visible": false,
                        },
                        {
                            "id": "type",
                            "type": "text",
                            "name": "Type",
                            "value": "backbutton",
                            "readonly": true,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "OkButtonFieldForm",
                    "title": "OkButtonField",
                    "url": "/form/:formKey/field",
                    "formFieldList": [
                        {
                            "id": "parentRef",
                            "type": "autocomplete",
                            "name": "Form",
                            "wordSearchEnabled": true,
                            "url": "/form",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "visible": true,
                            "defaultKey": "formKey"
                        },
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Name",
                            "value": "Ok",
                            "readonly": true,
                        },
                        {
                            "id": "type",
                            "type": "text",
                            "name": "Type",
                            "value": "okButton",
                            "readonly": true,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "DeleteButtonFieldForm",
                    "title": "DeleteButtonField",
                    "url": "/form/:formKey/field",
                    "formFieldList": [
                        {
                            "id": "parentRef",
                            "type": "autocomplete",
                            "name": "Form",
                            "wordSearchEnabled": true,
                            "url": "/form",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "visible": true,
                            "defaultKey": "formKey"
                        },
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Name",
                            "value": "Delete",
                            "readonly": true,
                        },
                        {
                            "id": "type",
                            "type": "text",
                            "name": "Type",
                            "value": "deleteButton",
                            "readonly": true,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "CancelButtonFieldForm",
                    "title": "CancelButtonField",
                    "url": "/form/:formKey/field",
                    "formFieldList": [
                        {
                            "id": "parentRef",
                            "type": "autocomplete",
                            "name": "Form",
                            "wordSearchEnabled": true,
                            "url": "/form",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "visible": true,
                            "defaultKey": "formKey"
                        },
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Name",
                            "value": "Cancel",
                            "readonly": true,
                        },
                        {
                            "id": "type",
                            "type": "text",
                            "name": "Type",
                            "value": "cancelButton",
                            "readonly": true,
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "TextFieldForm",
                    "title": "NewTextField",
                    "url": "/form/:formKey/field",
                    "formFieldList": [
                        {
                            "id": "parentRef",
                            "type": "autocomplete",
                            "name": "Form",
                            "wordSearchEnabled": true,
                            "url": "/form",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "visible": true,
                            "defaultKey": "formKey"
                        },
                        {
                            "id": "nameRef",
                            "type": "autocomplete",
                            "name": "Name",
                            "width": 2,
                            "required": true,
                            "wordSearchEnabled": true,
                            "form": "TranslationForm",
                            "url": "/translation",
                            "defaultKey": "translationKey"
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 1,
                            "min": 1,
                            "max": 100,
                            "digits": 0,
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "maxLength",
                            "type": "number",
                            "name": "MaxLength",
                            "width": 1,
                            "digits": 0,
                            "required": true,
                        },
                        {
                            "id": "width",
                            "type": "number",
                            "name": "Width",
                            "width": 1,
                            "min": 1,
                            "max": 3,
                            "digits": 0,
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "height",
                            "type": "number",
                            "name": "Height",
                            "width": 1,
                            "min": 1,
                            "max": 4,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "type",
                            "type": "text",
                            "name": "Type",
                            "value": "text",
                            "visible": false,
                        },
                        {   "id": "required",
                            "type": "RadioGroupField",
                            "name": "Required",
                            "horizontal": true,
                            "value": true,
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "yes",
                                    "key": "true"
                                },
                                {
                                    "type": "radio",
                                    "name": "no",
                                    "key": "false"
                                }
                            ]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "NumberFieldForm",
                    "title": "NewNumberField",
                    "url": "/form/:formKey/field",
                    "formFieldList": [
                        {
                            "id": "parentRef",
                            "type": "autocomplete",
                            "name": "Form",
                            "wordSearchEnabled": true,
                            "url": "/form",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "visible": true,
                            "defaultKey": "formKey"
                        },
                        {
                            "id": "nameRef",
                            "type": "autocomplete",
                            "name": "Name",
                            "width": 2,
                            "required": true,
                            "wordSearchEnabled": true,
                            "form": "TranslationForm",
                            "url": "/translation",
                            "defaultKey": "translationKey"
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 2,
                            "min": 1,
                            "max": 100,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "min",
                            "type": "number",
                            "name": "Min",
                            "width": 1,
                            "digits": 0,
                            "required": true,
                        },
                        {
                            "id": "max",
                            "type": "number",
                            "name": "Max",
                            "width": 1,
                            "digits": 0,
                            "required": true,
                        },
                        {
                            "id": "digits",
                            "type": "number",
                            "name": "Digits",
                            "width": 1,
                            "min": 0,
                            "max": 10,
                            "digits": 0,
                            "required": true,
                        },
                        {
                            "id": "width",
                            "type": "number",
                            "name": "Width",
                            "width": 1,
                            "min": 1,
                            "max": 3,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "type",
                            "type": "text",
                            "name": "Type",
                            "value": "number",
                            "visible": false,
                        },
                        {   "id": "required",
                            "type": "RadioGroupField",
                            "name": "Required",
                            "horizontal": true,
                            "value": true,
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "yes",
                                    "key": "true"
                                },
                                {
                                    "type": "radio",
                                    "name": "no",
                                    "key": "false"
                                }
                            ]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "DateFieldForm",
                    "title": "NewDateField",
                    "url": "/form/:formKey/field",
                    "formFieldList": [
                        {
                            "id": "parentRef",
                            "type": "autocomplete",
                            "name": "Form",
                            "wordSearchEnabled": true,
                            "url": "/form",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "visible": true,
                            "defaultKey": "formKey"
                        },
                        {
                            "id": "nameRef",
                            "type": "autocomplete",
                            "name": "Name",
                            "width": 2,
                            "required": true,
                            "wordSearchEnabled": true,
                            "form": "TranslationForm",
                            "url": "/translation",
                            "defaultKey": "translationKey"
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 1,
                            "min": 1,
                            "max": 100,
                            "digits": 0,
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "width",
                            "type": "number",
                            "name": "Width",
                            "width": 1,
                            "min": 1,
                            "max": 3,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "type",
                            "type": "text",
                            "name": "Type",
                            "value": "date",
                            "visible": false,
                        },
                        {   "id": "required",
                            "type": "RadioGroupField",
                            "name": "Required",
                            "value": true,
                            "horizontal": true,
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "Yes",
                                    "key": "true"
                                },
                                {
                                    "type": "radio",
                                    "name": "No",
                                    "key": "false"
                                }
                            ]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "LabelFieldForm",
                    "title": "NewLabelField",
                    "url": "/form/:formKey/field",
                    "formFieldList": [
                        {
                            "id": "parentRef",
                            "type": "autocomplete",
                            "name": "Form",
                            "wordSearchEnabled": true,
                            "url": "/form",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "visible": true,
                            "defaultKey": "formKey"
                        },
                        {
                            "id": "nameRef",
                            "type": "autocomplete",
                            "name": "Name",
                            "width": 2,
                            "required": true,
                            "wordSearchEnabled": true,
                            "form": "TranslationForm",
                            "url": "/translation",
                            "defaultKey": "translationKey"
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 1,
                            "min": 1,
                            "max": 100,
                            "digits": 0,
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "width",
                            "type": "number",
                            "name": "Width",
                            "width": 1,
                            "min": 1,
                            "max": 3,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "type",
                            "type": "text",
                            "name": "Type",
                            "value": "label",
                            "visible": false,
                        },
                        {   "id": "newRow",
                            "type": "RadioGroupField",
                            "name": "NewRow",
                            "width": 1,
                            "horizontal": true,
                            "value": true,
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "Yes",
                                    "key": "true"
                                },
                                {
                                    "type": "radio",
                                    "name": "No",
                                    "key": "false"
                                }
                            ]
                        },
                        {   "id": "required",
                            "type": "RadioGroupField",
                            "name": "Required",
                            "horizontal": true,
                            "value": true,
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "Yes",
                                    "key": "true"
                                },
                                {
                                    "type": "radio",
                                    "name": "No",
                                    "key": "false"
                                }
                            ]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "TranslationFieldForm",
                    "title": "NewTranslationField",
                    "url": "/form/:formKey/field",
                    "formFieldList": [
                        {
                            "id": "parentRef",
                            "type": "autocomplete",
                            "name": "Form",
                            "wordSearchEnabled": true,
                            "url": "/form",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "visible": true,
                            "defaultKey": "formKey"
                        },
                        {
                            "id": "nameRef",
                            "type": "autocomplete",
                            "name": "Name",
                            "width": 2,
                            "required": true,
                            "wordSearchEnabled": true,
                            "form": "TranslationForm",
                            "url": "/translation",
                            "defaultKey": "translationKey"
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 1,
                            "min": 1,
                            "max": 100,
                            "digits": 0,
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "width",
                            "type": "number",
                            "name": "Width",
                            "width": 1,
                            "min": 1,
                            "max": 3,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "type",
                            "type": "text",
                            "name": "Type",
                            "value": "Translation",
                            "visible": false,
                        },
                        {   "id": "required",
                            "type": "RadioGroupField",
                            "name": "Required",
                            "horizontal": true,
                            "value": true,
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "Yes",
                                    "key": "true"
                                },
                                {
                                    "type": "radio",
                                    "name": "No",
                                    "key": "false"
                                }
                            ]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "AutocompleteFieldForm",
                    "title": "NewAutoCompleteField",
                    "url": "/form/:formKey/field",
                    "formFieldList": [
                        {
                            "id": "parentRef",
                            "type": "autocomplete",
                            "name": "Form",
                            "wordSearchEnabled": true,
                            "url": "/form",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "visible": true,
                            "defaultKey": "formKey"
                        },
                        {
                            "id": "nameRef",
                            "type": "autocomplete",
                            "name": "Name",
                            "width": 2,
                            "required": true,
                            "wordSearchEnabled": true,
                            "form": "TranslationForm",
                            "url": "/translation",
                            "defaultKey": "translationKey"
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 1,
                            "min": 1,
                            "max": 100,
                            "digits": 0,
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "width",
                            "type": "number",
                            "name": "Width",
                            "width": 1,
                            "min": 1,
                            "max": 3,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "type",
                            "type": "text",
                            "name": "Type",
                            "value": "autocomplete",
                            "visible": false,
                        },
                        {
                            "id": "formRef",
                            "type": "autocomplete",
                            "name": "Form",
                            "width": 2,
                            "required": true,
                            "wordSearchEnabled": true,
                            "form": "FormForm",
                            "url": "/form",
                            "defaultKey": "formKey",
                            "newRow": true
                        },
                        {
                            "id": "url",
                            "type": "text",
                            "name": "Url",
                            "width": 2,
                            "required": true
                        },
                        {   "id": "wordSearchEnabled",
                            "type": "RadioGroupField",
                            "name": "WordSearchEnabled",
                            "required": true,
                            "horizontal": true,
                            "value": true,
                            "width": 1,
                            "newRow": true,
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "Yes",
                                    "key": "true"
                                },
                                {
                                    "type": "radio",
                                    "name": "No",
                                    "key": "false"
                                }
                            ]
                        },
                        {
                            "id": "defaultKey",
                            "type": "text",
                            "name": "DefaultKey",
                            "width": 1,
                        },
                        {   "id": "required",
                            "type": "RadioGroupField",
                            "name": "Required",
                            "horizontal": true,
                            "value": true,
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "Yes",
                                    "key": "true"
                                },
                                {
                                    "type": "radio",
                                    "name": "No",
                                    "key": "false"
                                }
                            ]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "RadioGroupFieldFieldForm",
                    "title": "NewRadioGroupField",
                    "url": "/form/:formKey/field",
                    "formFieldList": [
                        {
                            "id": "parentRef",
                            "type": "autocomplete",
                            "name": "Form",
                            "wordSearchEnabled": true,
                            "url": "/form",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "visible": true,
                            "defaultKey": "formKey"
                        },
                        {
                            "id": "nameRef",
                            "type": "autocomplete",
                            "name": "Name",
                            "width": 2,
                            "required": true,
                            "wordSearchEnabled": true,
                            "form": "TranslationForm",
                            "url": "/translation",
                            "defaultKey": "translationKey"
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 1,
                            "min": 1,
                            "max": 100,
                            "digits": 0,
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "width",
                            "type": "number",
                            "name": "Width",
                            "width": 1,
                            "min": 1,
                            "max": 3,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "type",
                            "type": "text",
                            "name": "Type",
                            "value": "RadioGroupField",
                            "visible": false,
                        },
                        {   "id": "radios",
                            "type": "text",
                            "name": "Radios",
                            "width": 1,
                            "value": [],
                            "visible": false,
                        },
                        {   "id": "radioValue1",
                            "type": "text",
                            "name": "RadioValue1",
                            "width": 1,
                            "newRow": true,
                            "required": true
                        },
                        {   "id": "radioValue2",
                            "type": "text",
                            "name": "RadioValue2",
                            "width": 1,
                            "required": true
                        },
                        {   "id": "radioValue3",
                            "type": "text",
                            "name": "RadioValue3",
                            "width": 1,
                            "newRow": true
                        },
                        {   "id": "radioValue4",
                            "type": "text",
                            "name": "RadioValue4",
                            "width": 1
                        },
                        {   "id": "horizontal",
                            "type": "RadioGroupField",
                            "name": "Horizontal",
                            "width": 1,
                            "horizontal": true,
                            "value": true,
                            "newRow": true,
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "Yes",
                                    "key": "true"
                                },
                                {
                                    "type": "radio",
                                    "name": "No",
                                    "key": "false"
                                }
                            ]
                        },
                        {   "id": "required",
                            "type": "RadioGroupField",
                            "name": "Required",
                            "horizontal": true,
                            "value": true,
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "Yes",
                                    "key": "true"
                                },
                                {
                                    "type": "radio",
                                    "name": "No",
                                    "key": "false"
                                }
                            ]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "FileUploadFieldForm",
                    "title": "NewFileUploadField",
                    "url": "/form/:formKey/field",
                    "formFieldList": [
                        {
                            "id": "parentRef",
                            "type": "autocomplete",
                            "name": "Form",
                            "wordSearchEnabled": true,
                            "url": "/form",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "visible": true,
                            "defaultKey": "formKey"
                        },
                        {
                            "id": "nameRef",
                            "type": "autocomplete",
                            "name": "Name",
                            "width": 2,
                            "required": true,
                            "wordSearchEnabled": true,
                            "form": "TranslationForm",
                            "url": "/translation",
                            "defaultKey": "translationKey"
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 1,
                            "min": 1,
                            "max": 100,
                            "digits": 0,
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "width",
                            "type": "number",
                            "name": "Width",
                            "width": 1,
                            "min": 1,
                            "max": 3,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "type",
                            "type": "text",
                            "name": "Type",
                            "value": "fileUpload",
                            "visible": false,
                        },
                        {   "id": "url",
                            "type": "text",
                            "name": "Url",
                            "width": 1,
                            "value": "/upload",
                            "newRow": true
                        },
                        {   "id": "acceptedFileTypes",
                            "type": "text",
                            "name": "AcceptedFileTypes",
                            "width": 1,
                            "value": [".pdf, .txt"],
                            "newRow": true
                        },
                        {   "id": "multiple",
                            "type": "RadioGroupField",
                            "name": "Multiple",
                            "horizontal": true,
                            "value": true,
                            "newRow": true,
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "Yes",
                                    "key": "true"
                                },
                                {
                                    "type": "radio",
                                    "name": "No",
                                    "key": "false"
                                }
                            ]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "CheckboxGroupFieldFieldForm",
                    "title": "NewCheckboxGroupField",
                    "url": "/form/:formKey/field",
                    "formFieldList": [
                        {
                            "id": "parentRef",
                            "type": "autocomplete",
                            "name": "Form",
                            "wordSearchEnabled": true,
                            "url": "/form",
                            "width": 2,
                            "required": true,
                            "readonly": true,
                            "visible": true,
                            "defaultKey": "formKey"
                        },
                        {
                            "id": "nameRef",
                            "type": "autocomplete",
                            "name": "Name",
                            "width": 2,
                            "required": true,
                            "wordSearchEnabled": true,
                            "form": "TranslationForm",
                            "url": "/translation",
                            "defaultKey": "translationKey"
                        },
                        {
                            "id": "sortOrder",
                            "type": "number",
                            "name": "SortOrder",
                            "width": 1,
                            "min": 1,
                            "max": 100,
                            "digits": 0,
                            "newRow": true,
                            "required": true
                        },
                        {
                            "id": "width",
                            "type": "number",
                            "name": "Width",
                            "width": 1,
                            "min": 1,
                            "max": 3,
                            "digits": 0,
                            "required": true
                        },
                        {
                            "id": "type",
                            "type": "text",
                            "name": "Type",
                            "value": "CheckboxGroupField",
                            "visible": false,
                        },
                        {   "id": "data",
                            "type": "text",
                            "name": "Data",
                            "width": 1,
                            "data": [],
                            "visible": false,
                            "newRow": true
                        },
                        {   "id": "dataValue1",
                            "type": "text",
                            "name": "DataValue1",
                            "width": 1,
                            "newRow": true,
                            "required": true
                        },
                        {   "id": "dataValue2",
                            "type": "text",
                            "name": "DataValue2",
                            "width": 1,
                            "required": true
                        },
                        {   "id": "dataValue3",
                            "type": "text",
                            "name": "DataValue3",
                            "width": 1,
                            "newRow": true
                        },
                        {   "id": "dataValue4",
                            "type": "text",
                            "name": "DataValue4",
                            "width": 1
                        },
                        {   "id": "required",
                            "type": "RadioGroupField",
                            "name": "Required",
                            "horizontal": true,
                            "value": true,
                            "newRow": true,
                            "radios": [
                                {
                                    "type": "radio",
                                    "name": "Yes",
                                    "key": "true"
                                },
                                {
                                    "type": "radio",
                                    "name": "No",
                                    "key": "false"
                                }
                            ]
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },

                {
                    "id": "IconForm",
                    "title": "Icons",
                    "url": "/icon",
                    "formFieldList": [
                        {
                            "id": "id",
                            "type": "text",
                            "name": "Id",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Name",
                            "width": 2,
                            "required": false
                        },
                        {
                            "id": "code",
                            "type": "text",
                            "name": "Code",
                            "width": 2,
                            "required": true
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "ColorForm",
                    "title": "Colors",
                    "url": "/color",
                    "formFieldList": [
                        {
                            "id": "id",
                            "type": "text",
                            "name": "Id",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "name",
                            "type": "text",
                            "name": "Name",
                            "width": 2,
                            "required": false
                        },
                        {
                            "id": "code",
                            "type": "text",
                            "name": "Code",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "url",
                            "type": "text",
                            "name": "Url",
                            "value": "/",
                            "width": 2,
                            "required": false
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },
                {
                    "id": "TranslationForm",
                    "title": "Translations",
                    "url": "/translation",
                    "formFieldList": [
                        {
                            "id": "id",
                            "type": "text",
                            "name": "Id",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "englishText",
                            "type": "text",
                            "name": "EnglishText",
                            "width": 2,
                            "required": true
                        },
                        {
                            "id": "germanText",
                            "type": "text",
                            "name": "GermanText",
                            "width": 2,
                            "required": false
                        },
                        {
                            "id": "frenchText",
                            "type": "text",
                            "name": "FrenchText",
                            "width": 2,
                            "required": false
                        },
                        {
                            "id": "italianText",
                            "type": "text",
                            "name": "ItalianText",
                            "width": 2,
                            "required": false
                        },
                        {
                            "type": "deleteButton",
                            "name": "Delete"
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                },

                {
                    "id": "UserForm",
                    "title": "User",
                    "url": "/user",
                    "formFieldList": [
                        {
                            "id": "name",
                            "type": "text",
                            "name": "User",
                            "width": 2,
                            "required": true,
                        },
                        {
                            "id":   "password",
                            "type": "text",
                            "name": "Password",
                            "newRow": true,
                            "width": 2,
                            "isPassword": true,
                            "required": true
                        },
                        {
                            "type": "cancelButton",
                            "name": "Cancel"
                        },
                        {
                            "type": "okButton",
                            "name": "Ok"
                        }
                    ]
                }
            ],

            "pageList": [
                {
                    "id": "mainmenu",
                    "name": "MainMenu",
                    "elementList": [
                        {
                            "type": "pageLabel",
                            "value": "<h3>Add new pages or forms</h3>",
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "name": "Pages",
                            "icon": "fa-images",
                            "color": "belize-hole",
                            "width": 2,
                            "page": "pagespage",
                        },
                        {
                            "type": "button",
                            "name": "Forms",
                            "icon": "fa-wpforms",
                            "color": "green",
                            "width": 2,
                            "page": "formspage",
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h3>Export guimodel & translation files</h3>",
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "name": "ExportFiles",
                            "icon": "fa-file-export",
                            "color": "asbestos",
                            "width": 2,
                            "page": "exportpage",
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h3>Check available colors and icons</h3>",
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "name": "Colors",
                            "icon": "fa-pencil",
                            "color": "yellow",
                            "width": 2,
                            "page": "colorspage",
                        },
                        {
                            "type": "button",
                            "name": "Icons",
                            "icon": "fa-cube",
                            "color": "amethyst",
                            "width": 2,
                            "page": "iconspage",
                        },
                    ]
                },
                {
                    "id": "pagespage",
                    "name": "Pages",
                    "elementList": [
                        {
                            "type": "backbutton",
                            "width": 1
                        },
                        {
                            "type": "button",
                            "name": "Forms",
                            "width": 1,
                            "icon": "fa-images",
                            "color": "green",
                            "page": "formspage"
                        },
                        {
                            "type": "newButton",
                            "name": "NewPage",
                            "width": 2,
                            "icon": "fa-plus",
                            "color": "belize-hole",
                            "form": {
                                "form": "PageForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "ExportJSON",
                            "width": 2,
                            "icon": "fa-file-export",
                            "color": "asbestos",
                            "page": "exportpage"
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h3>List of all added pages</h3>" +
                                "<h4>Don't forget to add the 'mainmenu' page, which is the necessary root page.</h4>",
                            "newRow": true,
                        },
                        {
                            "type": "pageLabel",
                            "value": "",
                            "newRow": true,
                        },
                        {
                            "type": "list",
                            "name": "PageList",
                            "icon": "fa-images",
                            "color": "teal",
                            "search": true,
                            "searchColor": "belize-hole",
                            "url": "/page",
                            "page": "pagepage",
                        },
                    ]
                },
                {
                    "id": "pagepage",
                    "name": "Page",
                    "elementList": [
                        {
                            "type": "backbutton",
                            "width": 1
                        },
                        {
                            "type": "button",
                            "name": "Forms",
                            "width": 1,
                            "icon": "fa-images",
                            "color": "green",
                            "page": "formspage"
                        },
                        {
                            "type": "button",
                            "name": "EditPage",
                            "icon": "fa-industry",
                            "width": 2,
                            "color": "belize-hole",
                            "form": {
                                "form": "PageForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "Preview",
                            "width": 2,
                            "icon": "fa-images",
                            "color": "belize-hole",
                            "page": "previewpage"
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h3>Add new page element</h3>",
                            "newRow": true,
                        },
                        {
                            "type": "newButton",
                            "name": "AddNewElement",
                            "width": 2,
                            "icon": "fa-plus",
                            "color": "teal",
                            "page": "elementpage"
                        },
                        {
                            "type": "button",
                            "name": "ExportJSON",
                            "width": 2,
                            "icon": "fa-file-export",
                            "color": "asbestos",
                            "page": "exportpage"
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h3>List of all added page elements</h3>",
                            "newRow": true,
                        },
                        {
                            "type": "list",
                            "name": "ElementList",
                            "icon": "fa-puzzle-piece",
                            "color": "teal",
                            "search": true,
                            "width": 2,
                            "searchColor": "belize-hole",
                            "url": "/page/:pageKey/element",
                            "form": {
                                "form": "PageElementForm"
                            }
                        }
                    ]
                },
                {
                    "id": "elementpage",
                    "name": "SelectElementType",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Forms",
                            "width": 1,
                            "icon": "fa-images",
                            "color": "green",
                            "page": "formspage"
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h3>Select the page element type</h3>",
                            "newRow": true,
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h4>Button and label elements</h4>",
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "color": "teal",
                            "name": "NewButtonElement",
                            "width": 2,
                            "icon": "fa-plus",
                            "details": ["to add new Buttons"],
                            "form": {
                                "form": "NewButtonElementForm"
                            }
                        },
                        {
                            "type": "button",
                            "color": "teal",
                            "name": "ButtonElement",
                            "width": 2,
                            "icon": "fa-folder-open",
                            "details": ["can open a form or a page"],
                            "form": {
                                "form": "ButtonElementForm"
                            }
                        },
                        {
                            "type": "button",
                            "color": "teal",
                            "name": "LinkButtonElement",
                            "width": 2,
                            "icon": "fa-external-link-alt",
                            "details": ["opens an external link"],
                            "form": {
                                "form": "LinkButtonElementForm"
                            }
                        },
                        {
                            "type": "button",
                            "color": "teal",
                            "name": "PageLabelElement",
                            "width": 2,
                            "icon": "fa-tag",
                            "details": ["simple label for structuring"],
                            "form": {
                                "form": "PageLabelElementForm"
                            }
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h4>List elements</h4>",
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "color": "teal",
                            "name": "ListElement",
                            "width": 2,
                            "icon": "fa-list",
                            "details": ["shows a list of elements from an url"],
                            "form": {
                                "form": "ListElementForm"
                            }
                        },
                        {
                            "type": "button",
                            "color": "teal",
                            "name": "ElementListElement",
                            "width": 2,
                            "icon": "fa-list-alt",
                            "details": ["shows a list of json elements"],
                            "form": {
                                "form": "ElementListElementForm"
                            }
                        },
                        {
                            "type": "button",
                            "color": "teal",
                            "name": "ButtonGroupElement",
                            "width": 2,
                            "icon": "fa-object-group",
                            "details": ["shows buttons grouped together"],
                            "form": {
                                "form": "ButtonGroupElementForm"
                            }
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h4>Complex elements</h4>",
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "color": "teal",
                            "name": "BreadCrumbElement",
                            "width": 2,
                            "icon": "fa-angle-double-right",
                            "details": ["shows a breadcrumb element on top"],
                            "form": {
                                "form": "BreadCrumbElementForm"
                            }
                        },
                        {
                            "type": "button",
                            "color": "teal",
                            "name": "ChartElement",
                            "width": 2,
                            "icon": "fa-chart-area",
                            "details": ["shows a chart"],
                            "form": {
                                "form": "ChartElementForm"
                            }
                        },
                    ]
                },
                {
                    "id": "previewpage",
                    "name": "Preview",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Forms",
                            "width": 1,
                            "icon": "fa-images",
                            "color": "green",
                            "page": "formspage"
                        },
                        {
                            "type": "button",
                            "name": "Pages",
                            "width": 1,
                            "icon": "fa-images",
                            "color": "belize-hole",
                            "page": "pagespage"
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h4>Preview of Page:</h4>",
                            "newRow": true,
                        },
                        {
                            "type": "elementList",
                            "name": "Name",
                            "url": "/page/:pageKey/preview",
                            "newRow": true
                        }
                    ]
                },

                {
                    "id": "formspage",
                    "name": "Forms",
                    "elementList": [
                        {
                            "type": "backbutton",
                            "width": 1,
                        },
                        {
                            "type": "button",
                            "name": "Pages",
                            "width": 1,
                            "icon": "fa-images",
                            "color": "belize-hole",
                            "page": "pagespage"
                        },
                        {
                            "type": "newButton",
                            "name": "NewForm",
                            "width": 2,
                            "icon": "fa-plus",
                            "color": "green",
                            "form": {
                                "form": "FormForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "ExportJSON",
                            "width": 2,
                            "icon": "fa-file-export",
                            "color": "asbestos",
                            "page": "exportpage"
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h3>List of all added forms</h3>",
                            "newRow": true,
                        },
                        {
                            "type": "list",
                            "name": "FormList",
                            "icon": "fa-wpforms",
                            "color": "lime",
                            "search": true,
                            "width": 2,
                            "url": "/form",
                            "page": "formpage"
                        }
                    ]
                },
                {
                    "id": "formpage",
                    "name": "Form",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Pages",
                            "width": 1,
                            "icon": "fa-images",
                            "color": "belize-hole",
                            "page": "pagespage"
                        },
                        {
                            "type": "button",
                            "name": "EditForm",
                            "icon": "fa-industry",
                            "width": 2,
                            "color": "green",
                            "form": {
                                "form": "FormForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "Preview",
                            "width": 2,
                            "icon": "fa-search",
                            "color": "green",
                            "form": {
                                "form": "FormPreview"
                            }
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h3>Add new form field</h3>",
                            "newRow": true,
                        },
                        {
                            "type": "newButton",
                            "name": "AddNewField",
                            "width": 2,
                            "icon": "fa-plus",
                            "color": "lime",
                            "newRow": true,
                            "page": "fieldpage"
                        },
                        {
                            "type": "button",
                            "name": "ExportJSON",
                            "width": 2,
                            "icon": "fa-file-export",
                            "color": "asbestos",
                            "page": "exportpage"
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h3>List of added form fields</h3>",
                            "newRow": true,
                        },
                        {
                            "type": "list",
                            "name": "ElementList",
                            "icon": "fa-user",
                            "color": "lime",
                            "search": true,
                            "url": "/form/:formKey/field"
                        }
                    ]
                },
                {
                    "id": "fieldpage",
                    "name": "SelectFieldType",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Pages",
                            "width": 1,
                            "icon": "fa-images",
                            "color": "belize-hole",
                            "page": "pagespage"
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h3>Select the form field type</h3>",
                            "newRow": true,
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h4>Text fields</h4>",
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "name": "TextField",
                            "color": "lime",
                            "width": 2,
                            "icon": "fa-text-width",
                            "details": ["simple text field"],
                            "form": {
                                "form": "TextFieldForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "TranslationField",
                            "color": "lime",
                            "width": 2,
                            "icon": "fa-envelope-open-text",
                            "details": ["text field with translations"],
                            "form": {
                                "form": "TranslationFieldForm"
                            }
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h4>Number, date and label fields</h4>",
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "name": "NumberField",
                            "color": "lime",
                            "width": 2,
                            "icon": "fa-sort-numeric-up",
                            "details": ["number field"],
                            "form": {
                                "form": "NumberFieldForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "DateField",
                            "color": "lime",
                            "width": 2,
                            "icon": "fa-calendar-alt",
                            "details": ["shows a date field with datepicker"],
                            "form": {
                                "form": "DateFieldForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "LabelField",
                            "color": "lime",
                            "width": 2,
                            "icon": "fa-tag",
                            "details": ["simple label field for structuring"],
                            "form": {
                                "form": "LabelFieldForm"
                            }
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h4>Complex fields</h4>",
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "name": "AutoCompleteField",
                            "color": "lime",
                            "width": 2,
                            "icon": "fa-magic",
                            "details": ["autocompletion via input/select form"],
                            "form": {
                                "form": "AutocompleteFieldForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "RadioGroupField",
                            "color": "lime",
                            "width": 2,
                            "icon": "fa-layer-group",
                            "details": ["radiobutton fields (2-4 options)"],
                            "form": {
                                "form": "RadioGroupFieldFieldForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "CheckboxGroupField",
                            "color": "lime",
                            "width": 2,
                            "icon": "fa-check-square",
                            "details": ["checkbox fields (2-4 options)"],
                            "form": {
                                "form": "CheckboxGroupFieldFieldForm"
                            }
                        },
                        {
                            "type": "button",
                            "name": "FileUpload",
                            "color": "lime",
                            "width": 2,
                            "icon": "fa-file-upload",
                            "details": ["uploads one or more files"],
                            "form": {
                                "form": "FileUploadFieldForm"
                            }
                        }
                    ]
                },

                {
                    "id": "importpage",
                    "name": "JSONs",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "linkButton",
                            "name": "ImportJSON",
                            "icon": "fa-file-import",
                            "color": "asbestos",
                            "width": 2,
                            "url": "/json-import"
                        },
                        {
                            "type": "linkButton",
                            "name": "ImportTranslation",
                            "icon": "fa-file-import",
                            "color": "asbestos",
                            "width": 2,
                            "url": "/translation-import"
                        }
                    ]
                },
                {
                    "id": "exportpage",
                    "name": "JSONs",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "button",
                            "name": "Pages",
                            "width": 1,
                            "icon": "fa-images",
                            "color": "belize-hole",
                            "page": "pagespage"
                        },
                        {
                            "type": "button",
                            "name": "Forms",
                            "width": 1,
                            "icon": "fa-images",
                            "color": "green",
                            "page": "formspage"
                        },
                        {
                            "type": "DownloadComponent",
                            "newRow": true
                        }
                    ]
                },
                {
                    "id": "colorspage",
                    "name": "Colors",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h3>Shades of yellow to red</h3>",
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "name": "yellow",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "yellow",
                        },
                        {
                            "type": "button",
                            "name": "sun-flower",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "sun-flower",
                        },
                        {
                            "type": "button",
                            "name": "orange",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "orange",
                        },
                        {
                            "type": "button",
                            "name": "carrot",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "carrot",
                        },
                        {
                            "type": "button",
                            "name": "pumpkin",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "pumpkin",
                        },
                        {
                            "type": "button",
                            "name": "alizarin",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "alizarin",
                        },
                        {
                            "type": "button",
                            "name": "pomegranate",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "pomegranate",
                        },
                        {
                            "type": "button",
                            "name": "red",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "red",
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h3>Shades of pink to purple</h3>",
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "name": "pink",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "pink",
                        },
                        {
                            "type": "button",
                            "name": "magenta",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "magenta",
                        },
                        {
                            "type": "button",
                            "name": "amethyst",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "amethyst",
                        },
                        {
                            "type": "button",
                            "name": "wisteria",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "wisteria",
                        },
                        {
                            "type": "button",
                            "name": "purple",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "purple",
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h3>Shades of green</h3>",
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "name": "emerald",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "emerald",
                        },
                        {
                            "type": "button",
                            "name": "nephritis",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "nephritis",
                        },
                        {
                            "type": "button",
                            "name": "lime",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "lime",
                        },
                        {
                            "type": "button",
                            "name": "green",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "green",
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h3>Shades of blue</h3>",
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "name": "turquoise",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "turquoise",
                        },
                        {
                            "type": "button",
                            "name": "green-sea",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "green-sea",
                        },
                        {
                            "type": "button",
                            "name": "teal",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "teal",
                        },
                        {
                            "type": "button",
                            "name": "peter-river",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "peter-river",
                        },
                        {
                            "type": "button",
                            "name": "belize-hole",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "belize-hole",
                        },
                        {
                            "type": "button",
                            "name": "blue",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "blue",
                        },
                        {
                            "type": "button",
                            "name": "wet-asphalt",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "wet-asphalt",
                        },
                        {
                            "type": "button",
                            "name": "midnight-blue",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "midnight-blue",
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h3>Shades of grey</h3>",
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "name": "clouds",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "clouds",
                        },
                        {
                            "type": "button",
                            "name": "silver",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "silver",
                        },
                        {
                            "type": "button",
                            "name": "concrete",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "concrete",
                        },
                        {
                            "type": "button",
                            "name": "asbestos",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "asbestos",
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h3>Info colors</h3>",
                            "newRow": true,
                        },
                        {
                            "type": "button",
                            "name": "search",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "search",
                        },
                        {
                            "type": "button",
                            "name": "info",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "info",
                        },
                        {
                            "type": "button",
                            "name": "danger",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "danger",
                        },
                        {
                            "type": "button",
                            "name": "warning",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "warning",
                        },
                        {
                            "type": "button",
                            "name": "success",
                            "icon": "fa-pencil",
                            "width": 2,
                            "color": "success",
                        },
                    ]
                },
                {
                    "id": "iconspage",
                    "name": "Icons",
                    "elementList": [
                        {
                            "type": "backbutton",
                        },
                        {
                            "type": "pageLabel",
                            "value": "<h3>Some example icons</h3>",
                            "newRow": true,
                        },
                        {
                            "type": "list",
                            "width": 2,
                            "color": "amethyst",
                            "search": true,
                            "searchColor": "concrete",
                            "url": "/icon",
                            "form": {
                                "form": "IconForm"
                            }
                        },
                    ]
                }
            ]
        }
    };


    get guiModel() {
        return this._guiModel;
    }
}
