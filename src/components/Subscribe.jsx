
import React from 'react';
import styles from '../subscribe.module.css'

function Subscribe() {
  return (
    <div className={styles.container-sm}>
      <h1 className="form-title">Subscribe to Updates</h1>
      <p id={styles.subscribe_us}>Be in the know! Subscribe for exclusive deals and updates.</p>
      
      <div className={styles.form-container}>
        <form>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" className="form-control" placeholder="Enter your email " />
          </div>

          <div className="form-group d-grid">
            <button type="button" className="btn btn-success submit-btn btn-block">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Subscribe;
