const express = require('express');

const app = express();

const port = 8080;

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});

app.get('/', (req, res) => {
    console.log('API Fetch Request Received.');

    const data = {
        message: 'My name is Jason.'
    };

    res.send(data.message);

    console.log(`Message: ${data.message}`);
});
