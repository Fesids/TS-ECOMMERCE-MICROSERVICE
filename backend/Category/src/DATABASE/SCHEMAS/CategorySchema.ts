import mongoose, {Model, Document, Schema, model} from "mongoose";

type CategoryDocument = Document &{
    name: string,
    available: boolean
}

type CategoryInput = {

    name: CategoryDocument["name"]
}

const CategorySchema = new Schema(
    {
        name:{
            type: String,
            default: " "
        },
        available:{
            type: Boolean,
            default: true
        }
    }
)

const Category: Model<CategoryDocument> = model<CategoryDocument>("Category", CategorySchema);
export {Category, CategoryDocument, CategoryInput}