const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const app = new Koa()
const routing = require('./routes')

app.use(bodyparser())
routing(app)

app.listen(2333, () => console.log('app runing port 2333'))