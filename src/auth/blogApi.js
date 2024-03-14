
import { blogApi } from "./auth";


export async function getAllblogs(){
    const res =await fetch (`${blogApi}/all`,
    {   
        method: 'GET',
       
        headers:{
            "x-auth-token":localStorage.getItem("token"),
            "Content-Type": "application/json"

            
        }
      
    })
    const data= await res.json();
    return data
}



export async function addBlog(payload)
{
  
    const res = await fetch(`${blogApi}/add`,
    {
        method:"POST",
        body: JSON.stringify(payload),
        headers:{
            "x-auth-token": localStorage.getItem("token"),
          
        },
    })
    const data = await res.json();
    return data;
}


export async function getUserBlog(){
    const res = await fetch(`${blogApi}/user`,{
        method: 'GET',
        headers:{
            "x-auth-token":localStorage.getItem("token"),

        }
    })
    const data= await res.json();
    console.log(data)
    return data;
}

export async function editBlog(blogId) {
    try {
      const res = await fetch(`${blogApi}/${blogId}`, {
        method: "PUT",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
  
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to edit blog");
    }
  }






export async function deleteBlog(blogId) {
    try {
      const res = await fetch(`${blogApi}/${blogId}`, {
        method: "DELETE",
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      });
  
      const data = await res.json();
      console.log(data);
      return data;
    } catch (error) {
      console.error(error);
      throw new Error("Failed to delete blog");
    }
  }