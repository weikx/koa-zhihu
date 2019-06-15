const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const app = new Koa()
const Router = require('koa-router')
const router = new Router()
const usersRouter = new Router({prefix: '/users'})

const auth = async (ctx, next) => {
  if (ctx.url !== '/users') {
    ctx.throw(401)
  }
  await next()
}

router.get('/', auth, (cxt, next) => {
  cxt.body = '这是首页'
})

usersRouter.get('/', auth, (cxt, next) => {
  cxt.body = '这是users'
})

usersRouter.get('/:id', auth, (cxt, next) => {
  cxt.body = `这是用户详情 ${cxt.params.id}`
})

usersRouter.post('/', auth, (ctx) => {
  ctx.body = '创建一个用户'
})

usersRouter.post('/:shit', auth, (ctx) => {
  ctx.body = `创建一个用户 ${ctx.params.shit}`
})

app.use(bodyparser())
app.use(router.routes())
app.use(usersRouter.routes())
app.use(usersRouter.allowedMethods())

app.listen(2333)