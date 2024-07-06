import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users: [],
    loading: true
};

const userSlice = createSlice({
    name: 'userList',
    initialState,
    reducers: {
        setUserList: (state, action)=>{
            state.users = action.payload;
            state.loading = false;
        },
    }
});

export const { setUserList} = userSlice.actions;
export default userSlice.reducer;