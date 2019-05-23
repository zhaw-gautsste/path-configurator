import BaseCtrl from "./base";
import {PathButton} from "../data/path-button";

export default class FileCtrl extends BaseCtrl {
  model = File;

    getEntityName(): string {
        return "file";
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

    // public create = async (req, res) => {
    //     console.log("*** createFileUpload ***");
    //     const service = this;
    //     try {
    //         const file: any = {};
    //         file.mimetype = req.file.mimetype;
    //         file.name = req.file.originalname;
    //         file.size = req.file.size;
    //         file.path = req.file.path;
    //
    //         const newDoc = await service.create(file, res);
    //         res.json(newDoc);
    //     } catch (err) {
    //         return res.status(400).json({ error: err.message });
    //     }
    // }
    //
    // public read = async (req, res) => {
    //     console.log("*** read ***");
    //     const service = this;
    //     try {
    //         const file = await service.read(req.params.fileKey, res);
    //         res.download(file.path, file.name);
    //     } catch (err) {
    //         return res.status(500).json({ error: err.message });
    //     }
    // }

}
