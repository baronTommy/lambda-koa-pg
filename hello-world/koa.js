const serverless = require('serverless-http')
const Koa = require('Koa')
const Router = require('koa-router');
const myFunc = require('./myFunc');

const DynamoDB = require('./dynamodb-client')
const dbClient = new DynamoDB.DynamoDBClient('Task');

// -------
const app = new Koa();
const router = new Router();
// -------

router
  .get('/koa', (ctx, next) => {
      ctx.body = 'koa Hello World';
  })

router
  .get('/koa/x', (ctx, next) => {
    ctx.body = 'koa x';
  })

router
  .get('/koa/say', (ctx, next) => {
    ctx.body = `koa ${myFunc.foo.name}`
  })


router
  .get('/koa/s3', (ctx, next) => {
    ctx.body = `koa ${myFunc.bar.name}`
  })


router
  .get('/koa/dynamo_db', async (ctx, next) => {
    await dbClient.scan()
    ctx.body = `koa `
  })

app
  .use(router.routes())
  .use(router.allowedMethods())

module.exports.lambdaHandler = serverless(app);


// テーブル定義作成
// aws dynamodb create-table --cli-input-json file://hello-world/schema/task.json --endpoint-url http://127.0.0.1:8000

// sam local invoke TaskFunction -e hello-world/data/put_event.json --env-vars hello-world/env.json

// https://qiita.com/umeneri/items/6fb3f7560f4a878f6dfd
// https://qiita.com/gzock/items/e0225fd71917c234acce

// docker-compose up -d
// https://qiita.com/Yuki10/items/7a445a108b63b9298071
