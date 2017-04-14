/**
 * Module dependencies.
 */

var logger = require('koa-logger');
var serve = require('koa-static');
var parse = require('co-busboy');
var koa = require('koa');
var app = new koa();
var path = require('path');
var htmlparser = require('htmlparser2');
var cycle = require('cycle');

// log requests

app.use(logger());

// serve files from ./public

app.use(serve(path.join(__dirname, '/public')));

// handle uploads

let dom;

app.use(function*(next) {
  function parseHtml(html) {
    var handler = new htmlparser.DomHandler();
    var parser = new htmlparser.Parser(handler);
    parser.parseComplete(html);
    return handler.dom;
  }

  if (this.request.method === 'POST') {
    // the body isn't multipart, so busboy can't parse it
    if (!this.request.is('multipart/*')) return yield next

    var parts = parse(this)
    var part
    var chunks = [];
    var dom;

    while (part = yield parts) {
      part.on('data', (chunk) => {
        chunks.push(chunk);
      })
    }
    dom = parseHtml(Buffer.concat(chunks))
  }
  console.log(dom);
  this.response.body = cycle.decycle(dom);
})


// listen
app.listen(3000);
console.log('listening on port 3000');
