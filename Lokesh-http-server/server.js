const express = require('express');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/html', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head></head>
      <body>
        <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
        <p> - Martin Fowler</p>
      </body>
    </html>
  `);
});

app.get('/json', (req, res) => {
  res.json({
    slideshow: {
      author: 'Yours Truly',
      date: 'date of publication',
      slides: [
        {
          title: 'Wake up to WonderWidgets!',
          type: 'all'
        },
        {
          title: 'Overview',
          type: 'all',
          items: [
            'Why <em>WonderWidgets</em> are great',
            'Who <em>buys</em> WonderWidgets'
          ]
        }
      ],
      title: 'Sample Slide Show'
    }
  });
});


app.get('/uuid', (req, res) => {
  res.json({
    uuid: uuidv4()
  });
});

app.get('/status/:statusCode', (req, res) => {
  const statusCode = parseInt(req.params.statusCode);
  res.status(statusCode).send(`Response with status code ${statusCode}`);
});

app.get('/delay/:delayInSeconds', (req, res) => {
  const delayInSeconds = parseInt(req.params.delayInSeconds) * 1000;
  setTimeout(() => {
    res.status(200).send(`Response after ${delayInSeconds / 1000} seconds`);
  }, delayInSeconds);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
