const Router = require('koa-router')
const router = new Router({ prefix: '/users' })
const jwt = require('koa-jwt')
const { find, findById, create, update, delete: del, login, checkOwner, listFollowing, follow } = require('../controllers/users')
const { secret } = require('../config')

const auth = jwt({ secret })

router.get('/', find)

router.get('/:id', findById)

router.post('/', create)

router.patch('/:id', auth, checkOwner, update)

router.delete('/:id', auth, checkOwner, del)

router.post('/login', login)

router.get('/:id/following', listFollowing)

router.put('/following/:id', auth, follow)

module.exports = router