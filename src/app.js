const path = require('path');
const http = require('http');
const dotenv = require('dotenv');
// import commonjsVariables from 'commonjs-variables-for-esmodules';
const DB = require('./db.js');
const getHandler = require('./handlers/get-handler.js');
const postHandler = require('./handlers/post-handler.js');
const putHandler = require('./handlers/put-handler.js');
const deleteHandler = require('./handlers/delete-handler.js');
const validateRoute = require('./validators/route-validator.js');

// const { __dirname, __filename } = commonjsVariables(import.meta);

dotenv.config();

// process.stdout.write('\x1Bc');
// process.stdout.write(
//   `running @ ${path.resolve(__dirname, __filename)}\n`
// );

const server = http.createServer();

server.on('request', (req, res) => {
  req.DB = DB;
  if (validateRoute(req, res)) {
    switch (req.method) {
      case 'GET':
        getHandler(req, res);
        break;
      case 'POST':
        postHandler(req, res);
        break;
      case 'PUT':
        putHandler(req, res);
        break;
      case 'DELETE':
        deleteHandler(req, res);
        break;
      default:
        res.statusCode = 400;
        res.end(`THIS SERVER DOES NOT HANDLE THE "${req.method}" METHOD.`);
        break;
    }
  } else {
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(`BAD REQUEST :: ${req.method} @ ${req.xURL}`);
  }
});

server.listen(process.env.PORT, (e) => {
  // eslint-disable-next-line no-unused-expressions
  e
    ? console.error(e.message)
    : console.log(
        `${path.resolve(__dirname, __filename)}\nlistening @ port:${process.env.PORT}`
      );
});

module.exports = { server };
