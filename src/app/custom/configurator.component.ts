import {Component} from "@angular/core";
import {CustomPageElement} from "path-framework/app/path-framework/page/element/custom/custom-container.component";

@Component({
    templateUrl: "configurator.component.html"
})
export class ConfiguratorComponent extends CustomPageElement {

    constructor() {
        super();
    }

    public getText(): string {
        if (this.pageElement != null && this.pageElement.parentPageElement != null) {
            return this.pageElement.parentPageElement.name;
        }
        return null;
    }
}
