import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentAccount: {
        id: 1,
        username: "_furkankaratas",
        fullName: "Furkan Karataş",
        avatar: "https://pbs.twimg.com/profile_images/1691897160151826432/_4J4ek7b_400x400.jpg"
    },
    accounts: [
        {
            id: 1,
            username: "_furkankaratas",
            fullName: "Furkan Karataş",
            avatar: "https://pbs.twimg.com/profile_images/1691897160151826432/_4J4ek7b_400x400.jpg"
        },
        {
            id: 2,
            username: "zekworks",
            fullName: "ZékWorks",
            avatar: "https://pbs.twimg.com/profile_images/1246914893196001281/0yGisWCS_400x400.jpg"
        },
        {
            id: 3,
            username: "borclarim",
            fullName: "BORÇLARIM.COM",
            avatar: "https://pbs.twimg.com/profile_images/1389534578860339201/TByaL3WN_400x400.jpg"
        }
    ]
}

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        //state manupule
        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if(state.currentAccount && action.payload === state.currentAccount.id){
                this._setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})


export const { _addAccount, _setCurrentAccount, _removeAccount} = auth.actions

export default auth.reducer