const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('R8X Athlete Rating Platform API');
});

// Placeholder for authentication, ratings, and admin routes

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
