import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddTask from "./components/AddTask";
import TaskLists from "./components/TaskLists";
import DashBoard from "./components/Dashborad";
import Body from "./layout/body";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body/>}>
     <Route path="/" element={<DashBoard />} />
     <Route path="/addtask" element={<AddTask/>}/>
     <Route path="/tasklists" element={<TaskLists/>}/>
      
      </Route>
    </Routes>   
     </BrowserRouter>
  );
}

export default App;

