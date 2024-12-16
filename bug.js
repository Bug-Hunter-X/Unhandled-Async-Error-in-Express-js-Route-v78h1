const express = require('express');
const app = express();
app.get('/', (req, res) => {
  // Simulate an asynchronous operation that might throw an error
  setTimeout(() => {
    // This line might throw an error if 'someData' is undefined
    const data = someData.someProperty;
    res.send(data);
  }, 100);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});