import {createSlice } from '@reduxjs/toolkit'


export const TotalSlice = createSlice({
    name: 'Total',
    initialState: {value:[],total:0},
    reducers:{
        value: (state,payload)=>{
            state.value = payload.payload;
            console.log(payload.payload)
        },
        increment: (state,payload) =>{
            let a = state.value.map((val)=>{
                let data = JSON.parse(JSON.stringify(val));
                if(data.id === payload.payload){
                    data.count = data.count+1
                    state.total=state.total+data.price   
                }
                return data;    
            })
            state.value=a;
        },
        decrement: (state,payload) =>{
            let a = state.value.map((val)=>{
                let data = JSON.parse(JSON.stringify(val));
                if(data.id === payload.payload){
                    let count = data.count
                    if(count>0){
                        count=count-1;
                        data.count=count
                        let total = state.total;
                        state.total = total-data.price
                        console.log(count+"A");
                    }
                    else{
                        count = count-1
                        console.log(count+"B");
                    }
                }
                return data
            })
            state.value=a;
        }  
    }
    
})


export default TotalSlice.reducer;
export const {increment, value, decrement} = TotalSlice.actions;