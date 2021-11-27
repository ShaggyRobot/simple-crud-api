import { v4 as generateUuid } from 'uuid';
import DB from '../db.js';
import bodyValidator from '../validators/body-validator.js';

export default (req, res) => {
  let body = [];
  let dbEntry = {};
  console.log(req.xURL);
  req.on('data', (data) => {
    body.push(data);
  });
  req.on('end', () => {
    const validate = bodyValidator(body);
    if (validate.isValid) {
      body = Buffer.concat(body).toString();
      // dbEntry.id = generateUuid();
      dbEntry = { id: generateUuid(), ...JSON.parse(body) };
      DB.push(dbEntry);
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(dbEntry));
    }
    res.writeHead(400, { 'Content-Type': 'application/json' });
    res.end(validate.msg);
  });
};
