import { useState } from "react";
import Navbar from "../components/Navbar";
import { blogApi } from "../auth/auth";



export default function AddBlog() {
  const [title, setTitle] = useState("");
  const [blog, setBlog] = useState("");

  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");


  const handleSubmit = async () => {
   
    const requestBody = {
      title,
      blog,};
      const token = localStorage.getItem("token")
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token // Add your JWT token here
        
      },
      body: JSON.stringify(requestBody)
    };

    try {
      const data = await fetch(`${blogApi}/add`, requestOptions);
      if (!data.ok) {
        throw new Error('Failed to create blog post');
      }
      setTitle('');
      setBlog('');
      console.log('Blog post created successfully');
      setSuccessMsg(data.message)
      
    } catch (error) {
      console.error('Error creating blog post:', error);
      setError(error)
    }
  };




 
       
return (
    <div>
      <Navbar />
   
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

      <div className="sm:mx-auto sm:w-full sm:max-w-sm">


      <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Add BlogForm</h2><div >
              <label className="block text-md font-weight 2 text-teal-950 font-medium leading-6 border-green-500">Title</label>
              <div className="mt-2"><input  required className="block w-full rounded-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
              </div>
              </div>

              <div>
                <lable  className="block text-md font-medium leading-6 text-gray-900">Blog</lable>
                <div className="mt-2">  <textarea  required className="block w-full rounded-md border-0  px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" type="text" value={blog} onChange={(e)=>setBlog(e.target.value)}/>
              </div>
              </div>
              <div className="mt-2">
              <button className="btn btn-info" onClick={()=>handleSubmit()} disabled={!blog} >post</button>
      
          </div>
          </div>

      <div className="flex min-h-full flex-row justify-center px-6 py-12 lg:px-8">
        <div>
          {error ? (
            <div>
              <div className="badge badge-error gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-4 h-4 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                {error}
              </div>
            </div>
          ) : (
            ""
          )}

          {successMsg ? (
            <div className="badge badge-success gap-2">
              <svg
                xmlns="http://www.w3.org/2001/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-4 h-4 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
              {error}
              {successMsg}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      </div>
    </div>
  );
}

// function BlogForm({
//   blog,
//   setBlog,
//   title,
//   setTitle,
//   handlePost,
//   handleSubmit,
//   image,
//   setImage,
// }) {
//   return 
// }
