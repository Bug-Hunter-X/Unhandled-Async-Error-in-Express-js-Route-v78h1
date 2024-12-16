const express = require('express');
const app = express();
app.get('/', (req, res) => {
  setTimeout(() => {
    try {
      // Wrap the asynchronous operation in a try...catch block
      const data = someData.someProperty;
      res.send(data);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Internal Server Error');
    }
  }, 100);
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
// Define someData to avoid undefined error
const someData = {someProperty: 'someValue'};