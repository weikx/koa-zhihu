const Topic = require('../models/topic')

class TopicCtl {
  async find(ctx) {
    const defaultPerPage = 10
    const perPage = Math.max(ctx.query.per_page * 1, 1)
    const page = Math.max(ctx.query.page * 1, 1) - 1
    ctx.body = await Topic.find().limit(perPage || defaultPerPage).skip(page * perPage || page * defaultPerPage)
  }
  async findById(ctx) {
    const { fields = '' } = ctx.query
    const selectFields = fields.split(';').filter(f => f).map(f => '+' + f).join('')
    const topic = await Topic.findById(ctx.params.id).select(selectFields)
    ctx.body = topic
  }
  async create(ctx) {
    ctx.verifyParams({
      name: { type: 'string', required: true },
      avatar_url: { type: 'string', required: false },
      intorduction: { type: 'string', required: false }
    })
    const topic = new Topic(ctx.request.body).save()
    ctx.body = topic
  }
  async update(ctx) {
    ctx.verifyParams({
      name: { type: 'string', required: false },
      avatar_url: { type: 'string', required: false },
      intorduction: { type: 'string', required: false }
    })
    const topic = await Topic.findByIdAndUpdate(ctx.params.id, ctx.request.body)
    ctx.body = topic
  }
}

module.exports = new TopicCtl()