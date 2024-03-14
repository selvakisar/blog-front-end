import { useState } from "react"
import { handleLogin } from "../auth/userApi"
import { useNavigate } from "react-router"

export default function Login() {
        const [email,setEmail]=useState("")
        const[password,setPassword]=useState("")
        const[successMsg,setSuccessMsg]=useState("")
        const[error,setError]=useState("")

const navigate=useNavigate()

        const loginUser = async()=>{
            const payload={email,password}

            handleLogin(payload).then((data)=>{
                if(data.error){
                    setError(data.error)
                    setSuccessMsg("")
                   

                }else{
                    setError("")
                    setSuccessMsg(data.message)
                 
                
                    localStorage.setItem("token",data.token)
                    navigate('/home')
                    console.log("token",data.token)
                }
            })
        }
    return(
        <div> 
            <Loginform
            
            email={email}
            password={password}
            setEmail={setEmail}
            setPassword={setPassword}
            loginUser={loginUser}
            />
            

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
    )
    
};




function Loginform({email,setEmail,setPassword,password ,loginUser}){



    return(
        <div>
             <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://pbwebdev.co.uk/wp-content/uploads/2018/12/blogs-862x539.jpg" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Signin to Your Account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
   
   

      <div>
        <label   className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input    type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} required  
          className="block w-full rounded-md text-md border-0 px-2 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label   className="block text-sm font-medium leading-6 text-gray-900">Password</label>
          {/* <div className="text-sm">
            <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div> */}
        </div>
        <div className="mt-2">
          <input    type="password"  required  value={password} onChange={(e)=>setPassword(e.target.value)} 
          className=" px-2 block w-full text-md  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div className="py-4">
        <button  onClick={()=>loginUser()} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
      </div>


      {/* <p  className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">{error}</p>
    <p className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">{successMsg}</p>
     */}
   
    <p className=" mt-10 text-center text-sm text-gray-500">
      Don't have  an Account ?
        <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" >signup</a>
    </p>
  </div>
</div>
        </div>
    )

}