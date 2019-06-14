const Koa = require('koa')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()

router.get('/', (cxt, next) => {
  cxt.body = '这是首页'
})

router.get('/users', (cxt, next) => {
  cxt.body = '这是users'
})

router.get('/users:id', (cxt, next) => {
  cxt.body = `这是用户详情 ${ctx.params.id}`
})


app.use(router.routes())

app.listen(2333)