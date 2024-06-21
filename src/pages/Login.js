import React from 'react';

const Login = () => {
  return (
    <div style={styles.pageContainer}>
      <h2 style={styles.heading}>Login</h2>
      <form style={styles.form}>
        <div style={styles.formGroup}>
          <label style={styles.label}>Email:</label>
          <input type="email" style={styles.input} />
        </div>
        <div style={styles.formGroup}>
          <label style={styles.label}>Password:</label>
          <input type="password" style={styles.input} />
        </div>
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  pageContainer: {
    maxWidth: '600px',
    margin: '50px auto',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRadius: '5px',
    textAlign: 'center',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  formGroup: {
    marginBottom: '15px',
    textAlign: 'left',
    width: '100%',
  },
  label: {
    fontSize: '1rem',
    marginBottom: '5px',
    color: '#666',
  },
  input: {
    width: '100%',
    padding: '8px',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '3px',
  },
  button: {
    backgroundColor: '#333',
    color: '#fff',
    padding: '10px 20px',
    fontSize: '1rem',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default Login;
