const { Schema, model } = require('mongoose')

const TopicSchema = new Schema({
  __v: { type: String, select: false },
  name: { type: String, required: true },
  avatar_url: { type: String, required: false },
  introduction: { type: String, required: false }
})

module.exports = model('Topic', TopicSchema)