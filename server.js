const express = require('express');
const mongoose = require('mongoose');

app.use(express.json());

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB Atlas
mongoose
  .connect(
    `mongodb+srv://bitmo24:${process.env.DBPASSWORD}@users.saxeg6g.mongodb.net/?retryWrites=true&w=majority&appName=users`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
     }
  )
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB Atlas:', err));

// Define schema for user data
const userSchema = new mongoose.Schema({
  name: String,
  landmarks: [
    {
      x: Number,
      y: Number,
    },
  ],
});

// Create model from schema
const User = mongoose.model('User', userSchema);

// Endpoint to save user data
app.post('/api/users', async (req, res) => {
  try {
    console.log(req);
    const { name, landmarks } = req.body;
    const user = new User({ name, landmarks });
    await user.save();
    res.status(201).send('User data saved successfully');
  } catch (err) {
    console.error('Error saving user data:', err);
    res.status(500).send('Internal server error');
  }
});

// Endpoint to retrieve user data
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    console.error('Error retrieving user data:', err);
    res.status(500).send('Internal server error');
  }
});

// Start the server
app.listen(port, () =>
  console.log(`Server listening at http://localhost:${port}`)
);