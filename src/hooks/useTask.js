import {useContext} from "react";

import {TaskStateContext,TaskDispatchContext} from "../context/taskContext"


export const useTaskState=()=>{
    const context=useContext(TaskStateContext);

    if(!context){
        throw new Error("usetaskstate must be used inside taskprovider")
    }
    return context;
}

export const useTaskDispatch=()=>{
    const context=useContext(TaskDispatchContext)

      if(!context){
        throw new Error("usetaskdispatch must be used inside taskprovider")
    }
    return context;
}

