import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type InitialState = {
  value: LoginState;
}

type LoginState = {
  isLoggedIn: boolean,
  username: string,
  email:  string, 
  birthday:  string, 
  uid:  string, 
}

type Action = {
  username: string,
  email:  string, 
  birthday:  string, 
}

const initialState = {
  value:{
    isLoggedIn: false,
    username: "",
    email:  "", 
    birthday:  "", 
    uid:  "", 
  }as LoginState, 
} as InitialState;

export const login = createSlice({
  name: "login",
  initialState,
  reducers: {
    logOut: () => {
      return initialState;
    },
    logIn: (_, action: PayloadAction<Action>) => {
      return {
        value:{
          isLoggedIn:true,
          username: action.payload.username,
          email: action.payload.email,
          birthday: action.payload.birthday,
          uid: "bedur1",
        }
      }
    },
  }
})

export const {logOut, logIn} = login.actions;
export default login.reducer;