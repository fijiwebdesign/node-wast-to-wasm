// run `node index.js` in the terminal

console.log(`Hello Node.js v${process.versions.node}!`);

const http = require('http');
function createServer(PORT) {
  const server = http.createServer((req, res) => {
    console.log('new request', req.method, req.url);
    res.setHeader('Content-Type', 'application/json');
    res.end(
      JSON.stringify({
        data: {
          method: req.method,
          url: req.url,
          date: new Date().toISOString(),
        },
      })
    );
  });
  server.listen(PORT);
  return server;
}

createServer(80);
