const Koa = require('koa')
const app = new Koa()
const path = require('path')
const koaBody = require('koa-body')
const routing = require('./routes')
const error = require('koa-json-error')
const parameter = require('koa-parameter')
const mongoose = require('mongoose')
const { connectionStr } = require('./config')

// 使用 mongoose 连接 mongodb
mongoose.connect(connectionStr, { useNewUrlParser: true, useFindAndModify: false }, () => console.log('MongoDB 连接成功'))
mongoose.connection.on('error', console.error)

// 使用 koa-json-error 中间件进行统一错误处理
app.use(error({
  postFormat: (err, { stack, ...rest }) => process.env.NODE_ENV === 'production' ? rest : { stack, rest }
}))

// 使用 koa-body 中间件获取 post body 参数
// 
app.use(koaBody({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, '/public/uploads'),
    keepExtensions: true
  }
}))

// 使用 koa-parameter 进行入参校验
app.use(parameter(app))

// 自定义中间件进行路由注册
routing(app)

app.listen(2333, () => console.log('app runing port 2333'))