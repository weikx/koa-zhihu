const Router = require('koa-router')
const router = new Router({prefix: '/users'})
const jsonwebtoken = require('jsonwebtoken')
const { find, findById, create, update, delete : del, login, checkOwner } = require('../controllers/users')
const { screct } = require('../config')

const auth = async (ctx, next) => {
  const { authorization = '' } = ctx.request.header
  const token = authorization.replace('Bearer ', '')
  try {
    const user = jsonwebtoken.verify(token, screct)
    ctx.state.user = user
  } catch (err) {
    ctx.throw(401, err.message)
  }
  await next()
}

router.get('/', find)

router.get('/:id', findById)

router.post('/', create)

router.patch('/:id', auth, checkOwner, update)

router.delete('/:id', auth, checkOwner, del)

router.post('/login', login)

module.exports = router