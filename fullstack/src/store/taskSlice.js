import {createSlice} from "@reduxjs/toolkit";

const taskSlice=createSlice({
    name:"task",
    initialState:{
        task:[
            {
                "_id": "234234232r234234234",
                "title": "Complete Backend Homework",
                "description": "Implement CRUD operations for directory and task collections",
                "completed": false,
                "important": true,
                "deadline": "2024-10-20T00:00:00Z"
        }
    ]
       
    },
    reducers:{
        addTask: (state, action) => {
            const newTask = {
              id: state.task[state.task.length - 1].id + 1,
              ...action.payload,
            };
            state.task.push(newTask);
          },
    }


})

export const {addTask}=taskSlice.actions;
export default taskSlice.reducer;