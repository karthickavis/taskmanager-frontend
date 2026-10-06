import { useEffect,useState } from "react";
import { Moon, Sun } from "lucide-react";

const ThemeToggle=()=>{
    const [isDark,setIsDark]=useState(()=>{
        return localStorage.getItem("theme")==="dark";
    });

    useEffect(()=>{
       const root=document.documentElement;

       if(isDark){
        root.classList.add("dark")
        localStorage.setItem("theme","dark");
       }else{
        root.classList.remove("dark")
        localStorage.setItem("theme","light");
       }
    },[isDark])

    const toggleTheme=()=>{
        setIsDark((prev)=>!prev);
    }

    return(
        <button onClick={toggleTheme} className="rounded-lg border border-gray-300 px-4 py-2">
           {isDark ? <Sun size={17}/> : <Moon size={17}/>}
        </button>
    )

}
export default ThemeToggle;