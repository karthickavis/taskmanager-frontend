import api from "./api";

export const getAllTasks=async()=>{
    const response=await api.get("/users/task");
    return response.data;
}

export const getSingleTask=async(id)=>{
    const response=await api.get(`/users/task/${id}`)
    return response.data;
}
export const createTask=async(data)=>{
const response=await api.post("/users/task",data)
return response.data;
}
export const updateTask=async(id,data)=>{
    const response=await api.patch(`users/task/${id}`,data)
    return response.data

}
export const deleteTask=async(id)=>{
    const response=await api.delete(`/users/task/${id}`)
    return response.data
}