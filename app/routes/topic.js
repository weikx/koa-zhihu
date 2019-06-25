const Router = require('koa-router')
const router = new Router({ prefix: '/topic' })

const { find, findById, update, create } = require('../controllers/topic')

router.get('/', find)

router.get('/:id', findById)

router.patch('/:id', update)

router.post('/', create)

module.exports = router