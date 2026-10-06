import {createContext,useReducer} from "react";
import taskReducer,{initialState} from "../reducer/taskReducer"


export const TaskStateContext=createContext();
export const TaskDispatchContext=createContext();

export const TaskProvider=({children})=>{
    const [state,dispatch]=useReducer(taskReducer,initialState);
    return(
        <TaskStateContext.Provider value={{state}}>
        <TaskDispatchContext.Provider value={{dispatch}}>
            {children}
        </TaskDispatchContext.Provider>
        </TaskStateContext.Provider>
    )

}