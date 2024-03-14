import { useEffect, useState } from "react"
import { getAllblogs } from "../auth/blogApi"
import Navbar from "../components/Navbar"



export const AllBlog=()=>{
    const [error,setError]=useState("")
    const [blogs,setBlogs]=useState("")
    const [successMsg,setSuccessMsg]=useState("")
    

    useEffect(()=>{
        const token =localStorage.getItem("token")

        if(!token){
            setError("invalid Authentication")
        }else{
            handleBlogs()
        }
    },[])

    const handleBlogs=async(token)=>{
        getAllblogs(token).then((data)=>{
            if(data.error){
                setError(data.error)
                setSuccessMsg("")
            }else{
                setError("")
                setBlogs(data.data)
                setSuccessMsg(data.message)
            }
        })
    }
    return(
        <div><Navbar/>
        
              {blogs && ( <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
            {blogs.map((blogs,id)=>{
                const originalDate = new Date(blogs.date)
                    console.log(originalDate)

                originalDate.setHours(originalDate.getHours()+5)
                originalDate.setMinutes(originalDate.getMinutes()+30)


                const forDate = originalDate.toLocaleString()
                console.log(forDate.split("-"))

                return (
            <div className="container">
                        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 "key={blogs._id}>

<div  className="card w-auto h-auto bg-info shadow-xl border-red-950 " id={blogs._id}> </div>
<div className="card-body">

    <h2 className="text-xl text-pink-700 font-bold border-solid 3px to-blue-100" key={blogs._id} >{blogs.title}</h2> 
    <div className="bg border-x-gray-900 text-lime-800  ">
        {blogs.blog}

    </div>
    <div><p className="text-bold text-sky-500">posted on {forDate.toString()}</p></div>
            
    </div>
</div>
            </div>
                )
            })}
        </div>)}

               
        {successMsg?<div>{successMsg}</div>:""}
                {error?<div>{error}</div>:""}
        </div>
    )
}




// function BlogCards({blog}){
//     return(
        
//     )
// }