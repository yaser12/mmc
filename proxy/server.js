const express = require('express');
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware');
var morgan = require('morgan')

const app = express();

var allowedOrigins = [
    'http://localhost:3000',
    'http://localhost:3001',
    'http://localhost:3002',
    'http://localhost:3003',
    'http://localhost:3004',
    'http://176.28.21.228:23203'];

app.use(cors({
    "origin": function (origin, callback) {
        if (!origin) return callback(null, true); if (allowedOrigins.indexOf(origin) === -1) {
            var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
            return callback(new Error(msg), false);
        } return callback(null, true);
    },
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204,
    credentials: true
}));

app.use(morgan('combined'))

app.use('/**', createProxyMiddleware({ target: 'http://176.28.21.228:23203/', changeOrigin: true })); // https://mqdata-dev.trotec.com/ http://176.28.21.228:23203/



app.get('/', function (req, res) {
    res.send('Success!')
})

app.listen(3002);