// Angular
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
// Components
import {AppModule} from "path-framework/app/app.module";
import {ConfiguratorAppComponent} from "./configurator-app.component";
import {ConfiguratorComponent} from "./custom/configurator.component";
import {DownloadComponent} from "./custom/download.component";
// Services
import {DownloadService} from "../../server/rest/download.service";

@NgModule({
    declarations: [
        ConfiguratorAppComponent,
        ConfiguratorComponent,
        DownloadComponent
    ],
    imports: [
        AppModule.forRoot()
    ],
    providers: [
        DownloadService
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    bootstrap:    [ConfiguratorAppComponent],
    entryComponents: [ConfiguratorComponent, DownloadComponent]
})
export class ConfiguratorAppModule {}
