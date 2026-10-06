export const initialState={
    tasks:[]
}
const taskReducer=(state,action)=>{

    switch(action.type){
        case "ADD_TASK":
            return {
                ...state,
                tasks:[...state.tasks,action.payload]
            }
        case "DELETE_TASK":
            return{
                ...state,
                tasks:state.tasks.filter((task)=>task.id!==action.payload)
            }
            case "UPDATE_TASK":
                return{
                    ...state,
                    tasks:state.tasks.map((task)=>
                    task.id===action.payload.id?{...task,...action.payload}:task)
                }

                case "TOGGLE_TASK":
                    return{
                        ...state,
                        tasks:state.tasks.map((task)=>
                        task.id===action.payload?{...task,completed:!task.completed}:task
                    )
                    }

                    case "SET_TASK":
                        return{
                            ...state,
                            tasks:action.payload
                        }

                        default :
                        return state
    }
}
export default taskReducer;