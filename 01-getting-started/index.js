'use strict';

const Koa = require('koa');

const app = new Koa();

app.use(ctx => {
  ctx.body = {
    message: 'Not Found',
  };
  ctx.status = 404;
});

app.listen(3000);
