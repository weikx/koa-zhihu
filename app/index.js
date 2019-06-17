const Koa = require('koa')
const app = new Koa()
const bodyparser = require('koa-bodyparser')
const routing = require('./routes')
const error = require('koa-json-error')
const parameter = require('koa-parameter')
const mongoose = require('mongoose')
const { connectionStr } = require('./config')

mongoose.connect(connectionStr, { useNewUrlParser: true, useFindAndModify: false }, () => console.log('MongoDB 连接成功'))
mongoose.connection.on('error', console.error)

app.use(error({
  postFormat: (err, { stack, ...rest }) => process.env.NODE_ENV === 'production' ? rest : { stack, rest }
}))
app.use(bodyparser())
app.use(parameter(app))
routing(app)

app.listen(2333, () => console.log('app runing port 2333'))