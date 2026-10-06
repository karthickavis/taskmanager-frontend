import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Body=()=>{
return(
    <div className="min-h-screen bg-(--background) text-(--foreground)">
      <Navbar />

      <main className="p-2">
        <Outlet />
      </main>
    </div>
)
}
export default Body;