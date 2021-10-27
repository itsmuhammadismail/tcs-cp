import { ConstructionOutlined } from "@mui/icons-material";
import { Button } from "antd";
import { useEffect, useRef, useState } from "react";
import login from "../api/login";
import { useRouter } from 'next/router'

const check = () => {
  
}

const Login = () => {
    const router = useRouter()
    const username = useRef()
    const password = useRef()
    const [token, setToken] = useState(null)
    const registeruser = async(event) =>{
        event.preventDefault();
       const res = await login(username.current.value, password.current.value)
       console.log(res)
       setToken(res)
        if ("token" in res) {
            
            localStorage.setItem("token", res.token)
            router.push("/dashboard")

        }
    }
    // useEffect(()=>{
    //     console.log(typeof token, " Token", token)
    //     // if(token !== null){
    //     //     let t = 'token' in token;
    //     // }
        
    // },[token])
    return ( 
        <form className="flex flex-1 flex-col justify-center items-center">
        <h1 className="flex mt-8 justify-center items-center text-lg">Login Form</h1> 
        <div className="flex-1 flex-col m-8">
       <div className="flex items-center gap-3 m-4">
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">username</label>
                <input
                  type="name"
                  className="input2"
                  ref={username}
                
                />
          </div>
      </div>
      <div className="flex items-center gap-3 m-4">
              <div className="flex-1 flex items-center gap-4 w-full">
                <label className="label">password</label>
                <input
                  type="name"
                  className="input2"
                  ref={password}
                
                />
          </div>
      </div>
      <div className="flex justify-center items-center my-8">
         <Button className="justify-center flex-1 flex items-center" type="submit" color="primary"  onClick={registeruser}>Submit</Button>
        </div>
      </div>
      </form>
   
     );
}
 
export default Login ;
