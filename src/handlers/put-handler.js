const { validate } = require('uuid');
const bodyValidator = require('../validators/body-validator.js');

module.exports = (req, res) => {
  let body = [];
  req.on('data', (data) => {
    body.push(data);
  });
  req.on('end', () => {
    body = Buffer.concat(body).toString();
    const validateBod = bodyValidator(body);
    switch (true) {
      case !validate(req.id):
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(`"${req.id}" ID IS NOT VALID UUID.`);
        break;
      case !validateBod.isValid:
        res.writeHead(400, { 'Content-Type': 'application/json' });
        res.end(`${validateBod.msg}`);
        break;
      case !req.DB.find((item) => item.id === req.id):
        res.writeHead(404, { 'Content-Type': 'application/json' });
        res.end(`ITEM WITH "${req.id}" ID IS NOT FOUND`);
        break;

      default:
        req.DB.map((item, i) => {
          if (item.id === req.id) {
            // console.log(':::', item);
            req.DB[i] = { id: req.id, ...JSON.parse(body) };
            // req.DB[i].id = req.id;
          }
          return true;
        });
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(body);

        break;
    }
  });
};
