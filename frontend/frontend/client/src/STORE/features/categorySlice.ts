import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../store";
import { ICategory } from "../../MODELS/Category";




interface CategoryState{
    categories: ICategory[];
    status: string,
    error: any

}

const initialState: CategoryState = {
    
    categories: [],
    status: "idle",
    error: undefined
}


export const fetchCategories = createAsyncThunk(
    "category/list",
    async () =>{
        const response = await axios.get("http://127.0.0.1:8002/api/v1/category");
        const data = response.data;
        return data;
    }
)


export const saveCategory = createAsyncThunk(
    "category/save",
    async (data:Omit<ICategory, "id">, thunkAPI) =>{
        const response = await axios.post("http://127.0.0.1:8002/api/v1/category", data);
        return response.data;
    }
)



export const CategorySlice = createSlice({
    name: "category",
    initialState,
    reducers: {},
    extraReducers: (builder) =>{

        // fetch all categories
        builder.addCase(fetchCategories.pending, (state, action)=>{
            //state.categories = action.payload;
            state.status = 'loading';
            
        })
        .addCase(fetchCategories.fulfilled, (state, action) =>{
            state.status = 'succeded'
            state.categories = action.payload //state.categories.concat(action.payload)

        })
        .addCase(fetchCategories.rejected, (state, action) =>{
            state.status = 'failed'
            state.error = action.error.message
        })

        builder.addCase(saveCategory.fulfilled, (state, action)=>{
            state.categories.push(action.payload);
        });
    },
});


export default CategorySlice.reducer;

export const selectAllCategories = (state:RootState ) => state.category.categories;
















