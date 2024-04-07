import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import Header from './components/Header.jsx';


import Regist from './components/Regist.jsx';
import Login from './components/Login.jsx';
import Contact from './components/Contact.jsx';
import Salary from './Salary.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Welcome from './components/Welcome.jsx';

 let App = () => {
//   let [regist, setRegist] = useState(false);
//   let [login, setLogin] = useState(false);
//   let [contactus, setContactus] = useState(false);

let allroutes=createBrowserRouter(
[
  {
    path:'/',element:<Welcome/>
  },

  {
    path:'Regist',element:<Regist/>
  },

  {
    path:'Login',element:<Login/>
  },
  {
    path:'Contact',element:<Contact/>
  }

])
  return (
    <React.StrictMode>

      <RouterProvider router={allroutes}/>
         {/* <Header />   */}
         {/* <Home/> */}
      {/* <Salary/> */}

      {/* <Regist/> */}
      {/* <Login/> */}
      {/* <Contact/> */}
      {/* <Subscribe/> */}


       {/* <h5 style={{ textAlign: 'center', fontFamily: 'Georgia', marginTop: '2px' }}>
        SELECT WHERE YOU WANT TO GO...
      </h5>

      <div className="container-sm border w-50" style={{ marginTop: '20px', color: 'red' }}>
        <div className="form-check">
     <input type="checkbox" className="form-check-input"  name="regist" checked={regist}  onChange={(e) => setRegist(e.target.checked)}  />
    <label className="form-check-label">Registration Form</label>  </div>
   <div className="form-check">
    <input type="checkbox" className="form-check-input"  name="login"  checked={login}     onChange={(e) => setLogin(e.target.checked)}  />
          <label className="form-check-label">Login Form</label>
        </div>
        <div className="form-check">
          <input  type="checkbox" className="form-check-input" name="contact" checked={contactus}      onChange={(e) => setContactus(e.target.checked)}
          />
          <label className="form-check-label">Contact Us</label>
        </div>
      </div> */}

      
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
