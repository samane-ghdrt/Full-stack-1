import Task from "../component/Task";
import taskSlice from "./taskSlice";
import{configureStore} from "@reduxjs/toolkit";


export const store=configureStore({
reducer:{
task:taskSlice,
}
})