const axios = require('axios');

// Example data
const userData = {
  name: 'John',
  landmarks: [
    { x: 100, y: 200 },
    { x: 150, y: 180 },
    // Add more landmarks as needed
  ]
};

// Send POST request to save user data
// axios.post('https://face-authenticator-fptw.onrender.com/api/users', userData)
//   .then(response => {
//     console.log('User data saved successfully:', response.data);
//   })
//   .catch(error => {
//     console.error('Error saving user data:', error);
//   });
axios.get('https://face-authenticator-fptw.onrender.com/api/users').then(response=>response.data);