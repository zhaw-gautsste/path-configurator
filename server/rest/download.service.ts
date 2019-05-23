import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { GuiModelFile } from "../../src/app/models/guimodel-file.model";
import { TranslationFile } from "../../src/app/models/translation-file.model";
import {environment} from "../../src/environments/environment";

const API_URL = environment.API_URL;

@Injectable()
export class DownloadService {

    constructor(private http: HttpClient) {
    }

    getGUImodelFile(): Observable<GuiModelFile> {
        return this.http.get<GuiModelFile>(API_URL + "/services/json-export");
    }

    getTranslationFile(): Observable<TranslationFile> {
        return this.http.get<TranslationFile>(API_URL + "/services/translation-export");
    }

}
