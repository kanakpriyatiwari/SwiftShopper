
// Contact.js

import React from 'react';
import '../Contact.css';
import Header from './Header';

function Contact() {
  return (

    <> <Header/>

    <div className="row">
      <div className="col-sm-6 p-5">
        <h1 className="form-title" >Contact Us</h1>
        <p id='contact_us'> Thank you for visiting our website. If you have any questions or inquiries, please feel free to contact us.</p>
       
      </div>

      <div className="col-sm-6 p-5">
        <div className="contact-container">
          <div className="form-container1">
            <form>
              <div className="form-group">
                <label>First Name</label>
                <input type="text"  className="form-control" placeholder="Enter your name.." />
              </div>

              <div className="form-group">
                <label>Last Name</label>
                <input type="text"  className="form-control"  placeholder="Enter last name.." />
              </div>

              <div className="form-group">
                <label>Country</label>
                <input type="text" placeholder="Enter country" className="form-control" />
              </div>

              <div className="form-group">
                <label>Subject</label>
                <textarea placeholder="Write something.." className="form-control"></textarea>
              </div>

              <div className="form-group d-grid">
                <button type="button" className="btn btn-success submit-btn btn-block">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Contact;
