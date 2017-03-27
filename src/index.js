'use strict';

const Koa = require('koa');
const logger = require('koa-logger');
const axios = require('axios');

const github = {
  // This is a Promise!
  user: id => axios.get(`https://api.github.com/users/${id}`),
};

const app = new Koa();

app.use(logger());

app.use(async (ctx, next) => {
  ctx.state.id = 'koajs';
  await next();
});

app.use(async ctx => {
  const { data } = await github.user(ctx.state.id);
  ctx.body = data;
});

app.listen(3000);
