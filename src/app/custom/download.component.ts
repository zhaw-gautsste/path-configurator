import {Component, OnInit} from "@angular/core";
import {CustomPageElement} from "path-framework/app/path-framework/page/element/custom/custom-container.component";
import {DomSanitizer} from "@angular/platform-browser";
import {DownloadService} from "../../../server/rest/download.service";

@Component({
    templateUrl: "download.component.html"
})
export class DownloadComponent extends CustomPageElement implements OnInit {

    fileGuiModelUrl;
    fileTranslationsUrl;
    constructor(private sanitizer: DomSanitizer,
                private downloadService: DownloadService) {
        super();
    }

    ngOnInit() {
        this.downloadService.getGUImodelFile().subscribe(val => {
            const blob = new Blob([JSON.stringify(val, null, 2)], { type: "application/octet-stream" });
            this.fileGuiModelUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
        });

        this.downloadService.getTranslationFile().subscribe(val => {
            const blob = new Blob([JSON.stringify(val, null, 2)], { type: "application/octet-stream" });
            this.fileTranslationsUrl = this.sanitizer.bypassSecurityTrustResourceUrl(window.URL.createObjectURL(blob));
        });

    }

}
