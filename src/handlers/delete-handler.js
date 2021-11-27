import { validate } from 'uuid';
import bodyValidator from '../validators/body-validator.js';

export default (req, res) => {
  req.on('data', () => {
    switch (true) {
      case !validate(req.id):
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(`"${req.id}" ID IS NOT VALID UUID.`);
        break;

      case !req.DB.find((item) => item.id === req.id):
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(`ITEM WITH "${req.id}" ID IS NOT FOUND`);
        break;

      default:
        req.DB.map((item, i) => {
          if (item.id === req.id) {
            req.DB.splice(i, 1);
          }
          return true;
        });
        res.writeHead(204, { 'Content-Type': 'application/json' });
        res.end();
        break;
    }
  });
};
