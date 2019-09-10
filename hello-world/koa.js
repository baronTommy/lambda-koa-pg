const serverless = require('serverless-http')
const Koa = require('Koa')
const Router = require('koa-router');

const app = new Koa();
const router = new Router();


router
  .get('/koa', (ctx, next) => {
      ctx.body = 'koa Hello World';
  })

router
  .get('/koa/x', (ctx, next) => {
    ctx.body = 'koa x';
  })

app
  .use(router.routes())
  .use(router.allowedMethods());
  

module.exports.lambdaHandler = serverless(app);

