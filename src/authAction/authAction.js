// src/redux/actions/authActions.js

export const login = (username, password) => {
    return (dispatch) => {
      // Simulating an asynchronous action (e.g., API call)
      setTimeout(() => {
        if (username === 'demo' && password === 'password') {
          // Simulating a successful login
          dispatch({ type: 'LOGIN_SUCCESS' });
        } else {
          // Simulating a failed login
          dispatch({ type: 'LOGIN_FAILURE', payload: 'Invalid credentials' });
        }
      }, 1000); // Simulate API call delay
    };
  };
  