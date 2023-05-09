const express = require('express');

const app = express();

const port = 8080;

const data = {
    "message" : 'My name is Jason.'
};

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
});


var count = 0;
app.get('/', (req, res) => {
    console.log('|-----------------------------|');
    console.log('| API Fetch Request Received. |');
    console.log('|-----------------------------|');


    res.send(data);

    console.log(`Message:       ${data.message}`);
    count++;
    console.log(`Request Count: ${count}`);
    console.log('\n');
});

app.get('/:name', (req, res) => {
    console.log('********************************');
    console.log('* API Change Request Received. *');
    console.log('********************************');

    const name = req.params.name;
    data.message = `My name is ${name}.`;
    res.send(data);
    console.log(`Message:       ${data.message}`);
    console.log('\n');
});