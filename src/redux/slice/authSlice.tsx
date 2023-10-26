import {createSlice} from '@reduxjs/toolkit'
import { REHYDRATE } from 'redux-persist';

const authSlice = createSlice({

    name: "authSlice",
    initialState:{
        user: null,
        idToken: null
    },

    reducers:{
        setUser:(state, action) =>{
            state.user = action.payload
        },
        setIdToken:(state, action) =>{
            state.idToken = action.payload
        },
        clearUser: (state) =>{
            (state.user = null), (state.idToken = null)
        },
        [REHYDRATE]: (state, action) => {
            // Manejar la rehidratación aquí, por ejemplo:
            state.user = action.payload?.auth?.user || null;
            state.idToken = action.payload?.auth?.idToken || null;
          },
    }
})

export const {setIdToken,setUser,clearUser} = authSlice.actions
export default authSlice.reducer