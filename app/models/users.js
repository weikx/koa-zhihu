const { Schema, model } = require('mongoose')

const userSchema = new Schema({
  __v: { type: Number, select: false },
  name: { type: String, required: true },
  password: { type: String, required: true, select: false },
  avatar_url: { type: String },
  gender: { type: String, enum: ['male', 'female'], default: 'male', required: true },
  headline: { type: String },
  locations: { type: [{ type: String }], select: false },
  business: { type: String, select: false },
  employment: {
    type: [{
      company: { type: String },
      job: { type: String }
    }],
    select: false
  },
  education: {
    type: [
      {
        school: { type: String },
        mojor: { type: String },
        deploma: { type: Number, enum: [1, 2, 3, 4, 5] },
        entrance_year: { type: Number },
        gurdation_year: { type: Number }
      }
    ],
    select: false
  },
  following: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: 'User'
    }]
  },
  select: false
})

module.exports = model('User', userSchema)