import { createSlice } from '@reduxjs/toolkit'



const initialState = {
  loginDetails: {},
}

export const LoginSlice = createSlice({
  name: 'login slice',
  initialState,
  reducers: {
    loginUpdate: (state=initialState, action) => {
        console.log(action);
     
    },
  
    
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default LoginSlice.reducer