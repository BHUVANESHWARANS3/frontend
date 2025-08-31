import { useNavigate } from "react-router-dom";

function Welcome(){
    const navigate = useNavigate();
    return (
        <div>
            <h1>Hello!</h1>
            <button className="text-xl bg-red-400 text-white rounded-md p-3" onClick={(e)=>{
                navigate("/signin");
            }}>Log out</button>
        </div>
        
    )
}   
export default Welcome;