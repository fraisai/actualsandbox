const path = require('path');
const express = require('express');
const app = express();
const { SignalingChannel } = require('../node_modules/rtconnect/dist/src/index.js');

const PORT = 3000;

app.use('/build', express.static(path.join(__dirname, '../build')));
//app.use(express.static(path.join(__dirname, '../build')));

app.use(express.json());
app.use(express.urlencoded({extended : true}));


app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
})


const server = app.listen(PORT, () => {
    console.log('listening on port:', PORT, process.env.NODE_ENV);
});

const SigChannel = new SignalingChannel(server);
SigChannel.initializeConnection();