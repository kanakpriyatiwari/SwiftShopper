import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';  
import '../Regist.css';
import Header from './Header';

function Regist() {
  let [data, setdata] = useState({
    ename: "",
    dob: "",
    email: "",
    city: "",
    pwd: "",
    cpwd: ""
  });

  let [Eename, setEname] = useState("");
  let [Edob, setEdob] = useState("");
  let [Eemail, setEemail] = useState("");
  let [Ecity, setEcity] = useState("");
  let [Epass, setEpass] = useState("");

  let handledata = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  let handleregist = (e) => {
    e.preventDefault();
console.log(data);
console.log(data.ename.length);
    if (data.ename === "") {
      setEname("Enter your name");
  
    }
     if (data.ename.length <=4 && data.ename.length>0){
       setEname("enter ename more than 4 character!")
    console.log(Eename);
    }
    if (data.dob === "") {
      setEdob("Enter your dob");
    }
    if (data.email === "" ) {
      setEemail("Enter your email id");
    } 

    if (data.city === "") {
      setEcity("Enter your city");
    }
    if (data.pwd !== data.cpwd) {
      setEpass("Password not matched");
    }
  };

  return (
    <>
      <Header />

      <form className='container-sm '>
        <div className='container-sm box1'>
          <div>
            <h2 style={{ textAlign: "left" }}>Sign up</h2>
            <hr />

            <label className="form-label">Enter your name:</label>
            <input type="text" name='ename' className="form-control" placeholder='Enter your name' value={data.ename} onChange={handledata} />
            {data.ename.length === 0||data.ename.length<=4 ? <div style={{ color: "red" }}> {Eename} </div> : null}
          </div>

          <div>
            <label className="form-label">Enter your DOB:</label><br />
            <input type="date" name='dob' className="form-control" placeholder='Enter your dob' value={data.dob} onChange={handledata} />
            {data.dob.length === 0 ? <div style={{ color: "red" }}> {Edob} </div> : null}
          </div>

          <div>
            <label className="form-label">Enter your mail:</label><br />
            <input type="email" name='email' className="form-control" placeholder='Enter your email' value={data.email} onChange={handledata} />
            {data.email.length === 0 ? <div style={{ color: "red" }}> {Eemail} </div> : null}
          </div>

          <div>
            <label className="form-label">Enter your city:</label><br />
            <input type="text" name='city' className="form-control" placeholder='Enter your city' value={data.city} onChange={handledata} />
            {data.city.length === 0 ? <div style={{ color: "red" }}> {Ecity} </div> : null}
          </div>

          <div>
            <label className="form-label">Password:</label><br />
            <input type="password" name="pwd" className="form-control" id="pwd" value={data.pwd} onChange={handledata} />
           {/* <div style={{color:"red"}} >{Epass}</div> */}
          </div>
          <div>
            <label className="form-label">Confirm Password:</label><br />
            <input type="password" name="cpwd" className="form-control" id="cpwd" value={data.cpwd} onChange={handledata} />
            <div style={{ color: "red" }}> {Epass} </div>
          </div>

          <div>
            <label className="form-check-label">
              <input className="form-check-input" type="checkbox" name="remember" /> Remember me
            </label>
          </div>

          <button type='button' onClick={handleregist} className='btn btn-primary' > Sign up </button>
        </div>
      </form>
    </>
  );
}

export default Regist;
