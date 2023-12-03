import moongose from "mongoose";

export const MongoDBConnect = (mongoURL: string, dbName:string) =>{

    moongose.connect(mongoURL+dbName);
    moongose.set('strictQuery', false);
}