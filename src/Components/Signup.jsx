import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Signup() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    return (
        <form className="border w-full sm:w-[500px]  h-fit border-black mx-auto mt-52 p-10 bg-black bg-opacity-90 backdrop-blur-none  text-white">
            <h1 className="text-3xl font-bold">Create Account</h1>
            <input type="text" placeholder="Email" className="w-full  bg-transparent p-4 mt-5 outline-offset-4 outline-white border border-red-500 text-xl" required value={email} onChange={(e) => {
                setEmail(e.target.value);
            }}></input><br></br>
            <input type="text" placeholder="password" className="w-full  bg-transparent p-4 mt-5  outline-offset-4 outline-white  border border-white text-xl" required value={password} onChange={(e) => {
                setPassword(e.target.value);
            }}></input>
            <button className="text-center bg-red-500 block mt-5 w-full  p-2 rounded-md font-semibold text-xl" onClick={(e) => {
                e.preventDefault();
                if (email == "" || password == "") {
                    alert("please fill all the field")
                }
                else {
                    axios.post("https://backend-khaki-nine-39.vercel.app/signup", {
                        "username": email,
                        "password": password
                    }).then((msg) => {
                        if(msg.data.message==409)alert("username already exist")
                        else {
                            alert("signed up successfully")
                            navigate("/*")
                        }
                    })
                }
            }}>Sign Up</button>
        </form>
    )
}

export default Signup;
