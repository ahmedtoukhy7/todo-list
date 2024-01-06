import { createSlice } from "@reduxjs/toolkit";


const userSlice=createSlice({
    name:'user',
    initialState:{
       
        userList:[],
        searchList:[]
    },
    reducers:{
        addTask:(state,action)=>{
            state.userList.push(action.payload)
            localStorage.setItem('array', JSON.stringify(state.userList))
        

        } , 

        savearr:(state)=>{
            if(localStorage.getItem('array') !=null){
                state.userList = JSON.parse(localStorage.getItem('array'))
               }
        },

        deleteTask:(state,action)=>{
            state.userList=state.userList.filter((ele)=>ele.id != action.payload)
            localStorage.setItem('array',JSON.stringify(state.userList))
        },

        editTask:(state,action)=>{

            
           
           state.userList.map((ele)=>{
            if(ele.id==action.payload.id){
              
                ele.title=action.payload.title
                ele.description=action.payload.description
                
               
            }
           })
           localStorage.setItem('array',JSON.stringify(state.userList))
        },

        checkComplete : (state,action)=>{

            state.userList.map((ele)=>{
                if(ele.id==action.payload){
                  
                   ele.done ? ele.done=false : ele.done=true
                    
                   
                }
               })
               localStorage.setItem('array',JSON.stringify(state.userList))

        },

     searchFunc : (state,action)=>{
        state.searchList=state.userList.filter((ele)=>ele.title.toLowerCase().includes(action.payload.toLowerCase()))
        
     },


    }
})

export const {addTask , savearr , deleteTask , editTask , checkComplete , countComplete , searchFunc , filterComplet , filterUnComplet , mapAll} =userSlice.actions
export const userReducer=userSlice.reducer