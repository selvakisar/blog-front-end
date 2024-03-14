import { useNavigate } from "react-router"

export default function Navbar() {
    const navigate=useNavigate()
    return(
        <div>
            <div className="navbar  bg-accent text-primary-content justify-center  flex flex-grow   ">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm"> 
            <button className="btn btn-outline text-xl text-slate-950 mx-2 " onClick={()=>navigate('/all')}>All blogs</button>
  <button className="btn btn-outline text-xl text-slate-950 mx-2 " onClick={()=>navigate('/user')}>My blogs</button>
  <button className="btn btn-outline text-xl text-slate-950 mx-2 " onClick={()=>navigate('/add')}>Add blog</button>
</div>
           
  


</div>
        </div>
    )
    
};
