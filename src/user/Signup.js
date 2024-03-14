import { useState } from "react";
import { useNavigate } from "react-router";
import { handleSignup } from "../auth/userApi";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  const navigate = useNavigate();

  const SignupUser = async () => {
    const payload = { name, email, password };

    handleSignup(payload).then((data) => {
      if (data.error) {
        setError(data.error);
        setSuccessMsg("");

     
      } else {
        setError("");
        setSuccessMsg(data.message);
        localStorage.setItem("token", data.token);
    console.log(data.message);
        console.log("token", data.token);
        navigate('/home')
      }
    });
  };

  return (
    <div >
      <SignupForm
        name={name}
        setName={setName}
        setEmail={setEmail}
        email={email}
        setPassword={setPassword}
        password={password}
        SignupUser={SignupUser}
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
  );
}

function SignupForm({
  name,
  setName,
  email,
  setEmail,
  password,
  setPassword,
  SignupUser,

}) {
  return (
    <div>
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <img className="mx-auto h-10 w-auto" src="https://pbwebdev.co.uk/wp-content/uploads/2018/12/blogs-862x539.jpg" alt="Your Company"/>
    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up to Create account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
   
    <div>
        <label className="block text-sm font-medium leading-6 text-gray-900">Username</label>
        <div className="mt-2">
          <input  type="text" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={name} onChange={(e)=>setName(e.target.value)} required  />
        </div>
      </div>

      <div>
        <label   className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div className="mt-2">
          <input    type="email"  value={email} onChange={(e)=>setEmail(e.target.value)} required  
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
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
          className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
        </div>
      </div>

      <div className="py-4">
        <button  onClick={()=>SignupUser()} className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
      </div>


      {/* <p  className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">{error}</p>
    <p className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">{successMsg}</p>
     */}
   
    <p className=" mt-10 text-center text-sm text-gray-500">
      Already have  an Account ?
        <a href="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500" >signin</a>
    </p>
  </div>
</div>
    </div>
  );
}





// function sksks(){
//     return(
//         <div className="  flex flex-row w-1080px  h-1920px">
//       <div className="">
//         <label className="input input-bordered flex items-center gap-2 my-5  w-96">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             className="w-4 h-4 opacity-70"
//           >
//             <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
//             <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
//           </svg>
//           <input type="text" className="grow" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
//         </label>
//         <label className="input input-bordered flex items-center gap-2 my-5  w-96">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             className="w-4 h-4 opacity-70"
//           >
//             <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
//           </svg>
//           <input type="text" className="grow" placeholder="Username"
//          value={name} onChange={(e)=>setName(e.target.value)} />
//         </label>
//         <label className="input input-bordered flex items-center gap-2 my-5  w-96">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 16 16"
//             fill="currentColor"
//             className="w-4 h-4 opacity-70"
//           >
//             <path
//               fillRule="evenodd"
//               d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
//               clipRule="evenodd"
//             />
//           </svg>
//           <input type="password" className="grow"  placeholder="Password"value={password} onChange={(e)=>setPassword(e.target.value)} />
//         </label>

//         <button className="btn btn-outline btn-secondary" onClick={()=>SignupUser()}>Signup</button>
//             <p >{error}</p>
//             <p>{successMsg}</p>



//       </div>

//       <div className=" divider divider-horizontal" >
       
//       </div>
//         <div className="">
//       <img className="  w-max h-max border-sky-500" src="./intro.jpg"/>
//       <h1 className="text-l text-slate-500">Already have an account?<a href="/" className="font-medium text-red-600 hover:text-accent-500" > Sign in</a></h1>
//         </div>

//     </div>
//     )
// }