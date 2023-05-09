const express = require('express');

const app = express();

const port = 8080;

app.use(express.json());

const data = {
    "message" : 'My name is Jason.'
};

app.listen(port, () => {
    console.log(`Listening on port ${port}.`);
    process.stdin.on('readable', () => {
        const input = process.stdin.read();
        if (input !== null) {
            console.log(checkName(input.toString()));
            process.stdin.resume();
        }
    });
});

var fetchCount = 0;
app.get('/', (req, res) => {
    console.log('|-----------------------------|');
    console.log('| API Fetch Request Received. |');
    console.log('|-----------------------------|');

    res.send(data);

    console.log(`Message:   ${data.message}`)
    console.log(`Request Count: ${++fetchCount}`);
    console.log('\n');
});

var changeCount = 0;
app.get('/:name', (req, res) => {
    console.log('********************************');
    console.log('* API Change Request Received. *');
    console.log('********************************');

    const name = req.params.name;

    data.message = `My name is ${checkName(name)}`;

    res.send(data);

    console.log(data.message);
    console.log(`Request Count: ${++changeCount}`);
    console.log('\n');
});

function checkName(message) {
    if (message.toLowerCase().includes('stanley') ){
        message = message.replace(/stanley/gi, 'Jason');
    }
    return message;
}