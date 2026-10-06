import ThemeToggle from "./ThemeToggle";
import heroImg from "../assets/hero-img.jpeg";
const dashBoard=()=>{
return(
     <div className="min-h-screen">

      {/* <main className=" h-[400px] bg-cover bg-center bg-no-repeat"
       style={{backgroundImage:`url(${heroImg})`}}>
      </main> */}
    
      {/* <section className=" grid grid-cols-1 md:grid-cols-2 gap-2 p-2">
           <div className="border h-64"></div>
           <div className=" h-64 bg-cover bg-center bg-no-repeat rounded-3xl"
       style={{backgroundImage:`url(${heroImg})`}}></div>
           
      </section> */}
     
      <section className="p-2 border grid grid-cols-1 md:grid-cols-2  gap-2">
           <div className="border grid grid-cols-2 gap-2 p-2">
            <div className="h-[150px] border rounded-2xl">Total Tasks</div>
            <div className="h-[150px] border rounded-2xl">Completed</div>
            <div className="h-[150px] border rounded-2xl">Pending</div>
            <div className="h-[150px] border rounded-2xl">Overdue</div>
           </div>
           <div className="border grid grid-cols-1 md:grid-cols-2 p-2">
            <div className="border h-64 w-64 rounded-full m-auto border-8 border-blue-700">1</div>
            <div className="border">2</div>
           </div>
      </section>
    </div>
)
}
export default dashBoard;