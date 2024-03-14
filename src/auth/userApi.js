import { userApi } from "./auth";

export async function handleSignup(payload){
    const res = await fetch (`${userApi}/signup`,{
        method: 'POST',
        body:JSON.stringify(payload),
        headers:{
            "Content-Type": "application/json"
         
        }
    })
    const data = await res.json();
    return data;
}


export async function handleLogin(payload){
    const res = await fetch (`${userApi}/login`,{
        method: 'POST',
        body: JSON.stringify(payload),
        headers:{
            "content-type": "application/json"
        }
    })
    const data=await res.json()
    return data;
}