import * as mongoose from "mongoose";

export class MongoDbDatabase {

    private _database;

    constructor() {
        let mongodbURI;
        if (process.env.NODE_ENV === "test") {
            mongodbURI = process.env.MONGODB_TEST_URI;
        } else {
            mongodbURI = process.env.MONGODB_URI;
            // app.use(morgan("dev"));
        }
        mongoose.Promise = global.Promise;
        mongoose.connect(mongodbURI, { useNewUrlParser: true })
            .then(db => {
                console.log("Connected to MongoDB");

                this._database = db;
            })
            .catch(err => console.error(err));
    }

    public async allDocs(entity: string) {
        const data = await this._database.allDocs({
            include_docs: true,
            startkey: entity,
            endkey: entity + "\uffff"
        });
        const result: any[] = [];
        for (const row of data["rows"]) {
            result.push(row["doc"]);
        }
        return result;
    }

    public create(entity: string, data: any): Promise<any> {
        data._id = entity + "_" + this.generateUUID();
        return this._database.put(data);
    }

    public read(key: any): Promise<any> {
        return this._database.get(key);
    }

    public update(key: any, data: any): Promise<any> {
        const service = this;
        return service.read(key).then((doc) => {
            const updatedDoc: any = data;
            updatedDoc._rev = doc._rev;
            updatedDoc._id = doc._id;
            return service._database.put(updatedDoc);
        }).catch((err) => {
            data._id = key;
            return service._database.put(data);
        });
    }

    public delete(key: any): Promise<any> {
        const service = this;
        return service.read(key).then((doc) => {
            return service._database.remove(doc);
        });
    }

    private generateUUID() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
            // tslint:disable:no-bitwise
            const r = Math.random() * 16 | 0, v = c === "x" ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }

}
