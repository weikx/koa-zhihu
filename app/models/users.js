const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  __v: { type: Number, select: false },
  name: { type: String, required: true },
  password: { type: String, required: true, select: false },
  avatar_url: { type: String },
  gender: { type: String, enum: ['male', 'femail'], required: true },
  headline: { type: String },
  locations: { type: [{ type: String }] },
  business: { type: String },
  employment: {
    type: [{
      company: { type: String },
      job: { type: String }
    }]
  },
  education: {
    school: { type: String },
    mojor: { type: String },
    deploma: { type: Number, enum: [1, 2, 3, 4, 5] },
    entrance_year: { type: Number },
    gurdation_year: { type: Number }
  }
})

module.exports = model('User', userSchema)