import { Link, useNavigate } from "react-router-dom";
import Signup from "./Signup";
import { useState } from "react";
import axios from  "axios"
function Login() {
    const [email,setEmail] = useState("");
    const [password,setPassword]=useState("");
    const navigate = useNavigate();    
    return (
        <form  className="border w-full sm:w-[500px]  h-fit border-black mx-auto mt-52 p-10 bg-black bg-opacity-90 backdrop-blur-none  text-white">
            <h1 className="text-3xl font-bold">Sign in</h1>
            <input type="text" placeholder="Email" className="w-full  bg-transparent p-4 mt-5 outline-offset-4 outline-white border border-red-500 text-xl" required value={email} onChange={(e)=>{
                setEmail(e.target.value);
            }}></input><br></br>
            <input type="password" placeholder="password"  className="w-full  bg-transparent p-4 mt-5  outline-offset-4 outline-white  border border-white text-xl" required value={password} onChange={(e)=>{
                setPassword(e.target.value);
            }}></input>
            <button className="text-center bg-red-500 block mt-5 w-full  p-2 rounded-md font-semibold text-xl" onClick={(e)=>{
                e.preventDefault();
                if(email=="" || password==""){
                    alert("please fill all the field")

                }
                else{
                axios.post("http://localhost:3000/signin",{
                        "username":email,
                        "password":password
                }).then((msg)=>{
                   if(msg.data.status==200)navigate("/welcome");
                   else alert("invalid login credentials")
                })

            }
                  
            }}>Sign In</button>
            <a className="underline text-center block w-full  mt-5 text-xl cursor-pointer">Forgot password</a>
            <p className="text-xl font-semibold mt-5">New to Netflix?<Link className="hover:underline ml-2" to="/signup">Sign Up Now</Link></p>
        </form>
    )
}
export default Login;