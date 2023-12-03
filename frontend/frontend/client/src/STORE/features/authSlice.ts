import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IUser } from "../../MODELS/User"
import axios from "axios"
import Cookie from "js-cookie";

interface AuthState{
    userInfo: {},
    status: string,
    error: any,
    userToken: null
}

const initialState: AuthState ={
    userInfo: {} as IUser,
    status: "",
    error: undefined,
    userToken: null
}

export const fetchUserToken = createAsyncThunk(
    "auth/userToken",
    async (data: Omit<IUser, "id" |"username"|"role">) =>{
        const response = await axios.post("http://127.0.0.1:8002/api/v1/auth/login", data)

        Cookie.set("AuthCookie", response.data);

        return response.data;
    }
)

export const fetchUserDetail = createAsyncThunk(
    "auth/user",
    async (token:string) =>{
        const response = await axios.get("http://127.0.0.1:8002/api/v1/auth/user", {
            "headers":{
                Authorization: `Bearer ${token}`
            }
        })

        localStorage.setItem('currentuser', JSON.stringify({id: response.data.id, username: response.data.username, role: response.data.role}))

        return response.data;
    }
)

export const createUser = createAsyncThunk(
    "auth/create",
    async (data:Omit<IUser, "id"|"role">) => {
        const response = await axios.post("http://127.0.0.1:8002/api/v1/auth/register/EXTERNAL_USER", data);
        return response.data;
    }
)

export const AuthSlice = createSlice({
    name: "user",
    initialState,
    reducers:{

    }, 
    extraReducers: (builder) =>{

        builder.addCase(fetchUserToken.pending, (state, action )=>{
            state.status = 'loading'
        })
        .addCase(fetchUserToken.fulfilled, (state, action)=>{
            state.status = 'succeded'
            state.userToken = action.payload
        })
        .addCase(fetchUserToken.rejected, (state, action)=>{
            state.status = 'rejected'
            state.error = action.error.message
        })
        

        builder.addCase(fetchUserDetail.fulfilled, (state, action)=>{
            state.userInfo = action.payload
        })

    }
})