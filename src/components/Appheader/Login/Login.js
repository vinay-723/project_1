import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Login({onclick1,promphandler}){
 const[username,setusername]=useState('');
 const[password,setpassword]=useState('');
  
 const history=useHistory();
  
function inputhandler(event){
  let value=event.target.value;
  console.log(value);
}

 function onusername(event){
    console.log(event.target.value);
   setusername(event.target.value);
 }
 function onpasswordHandler(event){
    setpassword(event.target.value);
 }
 function onstopload(event){

    if(username=='admin' && password=='admin'){
        history.push('/Apphome')
        alert("logged successful")
    }
    else{
        alert("invalid credentials")
    }
    event.preventDefault();
 }
    return (
        <div>
            <form onSubmit={onstopload}>
                <div>
                    username:
                    <input type="text"  value={username} onChange={onusername}/>
                </div>
                <div>
                    password:
                    <input type="password" value={password} onChange={onpasswordHandler} />
                </div>
                <div>
                    <button className="btn btn-primary">login</button>
                </div>
            </form>






            {/* <button className="btn btn-primary" onClick={onclick1} >login</button>
            <button onClick={promphandler} >submit</button>

            <input onKeyDown={inputhandler} />
             */}
        </div>
    )
}
export default Login;