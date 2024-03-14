import { useEffect, useState } from "react";
import { deleteBlog, getUserBlog } from "../auth/blogApi";
import Navbar from "../components/Navbar";
import { redirect, useNavigate } from "react-router";

export const UserBlogs = () => {
  const navigate =useNavigate()
    const [error, setError] = useState("");
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
      const token = localStorage.getItem("token");
      if (!token) {
        setError("Invalid Authorization");
      } else {
        handleBlogs();
        
      }
    }, []);
  
    const handleBlogs = async () => {
        getUserBlog()
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setError("");
            setBlogs(data);
          }
        })
        .catch((error) => {
          console.error(error);
          setError("Failed to fetch blogs");
        });
    };
  
    const handleDeleteBlog = async (blogId) => {
      deleteBlog(blogId)
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setError("");
            setBlogs((rearrange) => rearrange.filter((blog) => blog._id !== blogId));
            redirect('/user')
          }
        })
        .catch((error) => {
          console.error(error);
          setError("Failed to delete blog");
        });
    };
  
    return (
      <div>
        <Navbar />
        <div>

            
        {blogs && ( <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">
            {blogs.map((blogs,id)=>{
                                const originalDate = new Date(blogs.date)
                                console.log(originalDate)
            
                            originalDate.setHours(originalDate.getHours()+5)
                            originalDate.setMinutes(originalDate.getMinutes()+30)
            
            
                            const forDate = originalDate.toLocaleString()
                            console.log(forDate.split("-"))
                        
                return (
                    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8 ">

                        <div  className="card w-auto h-auto bg-info shadow-xl border-red-950 " key={blogs._id} > </div>
                        <div className="card-body">

                            <h2 className="text-xl text-pink-700 font-bold border-solid 3px to-blue-100" >{blogs.title}</h2> 
                            <div className="bg border-x-gray-900 text-lime-800  ">
                                {blogs.blog}

                            </div>
                            <div><p className="text-bold text-sky-500">{forDate.toString()}</p></div>

                                <button className="btn btn-error w-fit" onClick={()=>handleDeleteBlog(blogs._id)}>Delete</button>
                            </div>
                    </div>
                )
            })}
        </div>)}

               

                {error?<div>{error}</div>:""}
        </div>
        
    
      </div>
    );
  };