const Koa = require('koa')
const bodyparser = require('koa-bodyparser')
const app = new Koa()
const routing = require('./routes')
const error = require('koa-json-error')
const parameter = require('koa-parameter')

app.use(error({
  postFormat: (err, {stack, ...rest}) => process.env.NODE_ENV === 'production' ? rest : {stack, rest}
}))
app.use(bodyparser())
app.use(parameter(app))
routing(app)

app.listen(2333, () => console.log('app runing port 2333'))