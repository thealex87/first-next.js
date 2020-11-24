const fs = require('fs');
const path = require('path');

export default function faturasListarHandler(req, res) {
  // get params and method type
  const {
    query: { id },
    method,
  } = req;
  
  const mockPath = path.join(process.cwd(), 'db', 'faturas.mock.json');
  fs.readFile(mockPath, 'utf-8', (err, data)=> {
    if (err) {
      res.statusCode = 500;
      res.end('Internal server error');
      return;
    };

    res.setHeader('Content-Type', 'application/json')
    res.end(data);
  });
}