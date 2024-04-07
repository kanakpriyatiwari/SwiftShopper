import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import '../Login.css';
import Header from './Header';

function Login() {
  let [wholeData, setWholedata] = useState({
    email: "",
    password: ""
  });

  let [emailError, setEmailError] = useState("");
  let [passwordError, setPasswordError] = useState("");

  let handledata = (e) => {
    setWholedata({ ...wholeData, [e.target.name]: e.target.value });
    
  };

// FORM VALIDATION ................................................

  let handleLogin = () => {
    setEmailError("");
    setPasswordError("");
    

if (wholeData.email === "") {
      setEmailError("Please enter your email");
    }

if (wholeData.password === "") {
      setPasswordError("Please enter your password");
    }

if (wholeData.email !== "" && wholeData.password !== "") {
      
      console.log("The details of logged in person.. :", wholeData);
    }
  };

  return (
    <>
      <Header />

      <div className="row">
        <div className="col-sm-6 p-5" id='login'>
          <h1 style={{ color: "#0A1D56" }} id='heading1'>Login ..</h1>
          <h2 style={{ color: "#FC6736" }}>
            Get access to your Orders, Wishlist and Recommendations
          </h2>
        </div>

        <div className="col-sm-6">
          <form className='container-sm' id='form' >

            <div className='container-sm'>
              <div>
                <input type="text" className="form-control" placeholder='Enter your Email' name="email" value={wholeData.email} onChange={handledata} />
                
                  { wholeData.email.length==0? <div style={{color:"red"}}>{emailError}</div>:null}
                

              </div><br />

              <div>
                <input type="password" placeholder='Enter your Password' className="form-control" name="password" value={wholeData.password} onChange={handledata} />
                <div style={{color:"red"}}>{passwordError}</div>
              </div><br />

              <div className='d-grid'>
                <button type='button' className=' btn btn-primary btn-block' onClick={handleLogin}>
                  LOGIN
                </button>
              </div><br />

              <div><a href="#">Forget password?</a></div><hr />

              <div className='d-grid'>
                <button type='button' className='btn btn-success btn-block'>Create new account</button>
              </div>            

            </div>
          </form>
        </div>
        
      </div>
    </>
  );
}

export default Login;
