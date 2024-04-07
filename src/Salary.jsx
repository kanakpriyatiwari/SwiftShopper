import React, { useState } from 'react';

function Salary() {
  let [salary, setSalary] = useState(0);
  let [hra, setHra] = useState(false);
  let [gender, setGender] = useState('');
  let [city, setCity] = useState('');
  let [gross, setGross] = useState(0);

  function display() {
    console.log(salary);
      let hr = 0, spall = 0, ta = 0, total = 0;
    
      if (hra) {
        hr = salary * 0.55;
      }
    
      if (gender === "male") {
        spall = salary * 0.1;
      } else if(gender==="female") {
        spall = salary * 0.15;
      }
    
      if (city === 'delhi') {
        ta = salary * 0.20;
      } else if (city === 'mumbai') {
        ta = salary * 0.30;
      } else if (city === 'banglore') {
        ta = salary * 0.40;
      }
    
      total = parseFloat(salary) + parseFloat(hr) + parseFloat(ta) + parseFloat(spall);
      setGross(total); 
      console.log(total);
    
    //   setGross(salary);

    //   if (hra)
    //     setGross(parseInt(salary) + parseInt(salary) * 0.55);
    //   console.log(hra);


    //   if (city === 'delhi') {
    //     setGross(parseInt(salary) + parseInt(salary) * 0.20);
    //   } else if (city === 'mumbai') {
    //     setGross(parseInt(salary) + parseInt(salary) * 0.30);
    //   } else if (city === 'banglore') {
    //     setGross(parseInt(salary) + parseInt(salary) * 0.40);
    //   }

    //   if (gender === 'male') {
    //     setGross(parseInt(gross) + parseInt(salary) * 0.1);
    //   } else if (gender === 'female') {
    //     setGross(parseInt(gross) + parseInt(salary) * 0.15);
    //   }
    }

    return (
      <>
        <div>
          <h5>EMPLOYEE SALARY</h5>

          <label>Salary</label>
          <input type="text" placeholder="enter amount" value={salary} onChange={(e) => setSalary(e.target.value)} />
          <br />
          <input type="checkbox" id="hra" name="hra" checked={hra} onChange={(e) => setHra(e.target.checked)} />
          <label>HRA</label>
          <br />

          <input type="radio" name="gender" value="male" checked={gender === 'male'} onChange={(e) => setGender(e.target.value)} />
          <label>male</label>

          <input type="radio" name="gender" value="female" checked={gender === 'female'} onChange={(e) => setGender(e.target.value)} />
          <label>female</label>
          <br />

          <select name="city" value={city} onChange={(e) => setCity(e.target.value)}>
            <option value="">Select City</option>
            <option value="delhi">delhi</option>
            <option value="mumbai">mumbai</option>
            <option value="banglore">banglore</option>
          </select>
          <br />
          <br />

          <button type="button" onClick={display}>
            CALCULATE
          </button>
          <br />
          <br />
          Gross salary : <input type="text" readOnly value={gross} />
        </div>
      </>
    );
  }

  export default Salary;


