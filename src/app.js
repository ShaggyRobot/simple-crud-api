import { v4 as uuid4, validate } from 'uuid';
import path from 'path';
import * as http from 'http';
import dotenv from 'dotenv';
import commonjsVariables from 'commonjs-variables-for-esmodules';
// import url from 'url';
import DB from './db.js';
import getHandler from './handlers/get-handler.js';
import postHandler from './handlers/post-handler.js';
import putHandler from './handlers/put-handler.js';
import deleteHandler from './handlers/delete-handler.js';
import validateRoute from './validators/route-validator.js';

const { __dirname, __filename } = commonjsVariables(import.meta);

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
        `\x1Bc${path.resolve(__dirname, __filename)}\nlistening @ port:${process.env.PORT}`
      );
});

// const id = uuid4();
// console.log(validate(id));
