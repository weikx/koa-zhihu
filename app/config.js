module.exports = {
  secret: process.env.TOKEN_SECTET,
  connectionStr: `mongodb+srv://weikx:${process.env.MONGO_PASS}@cluster0-fpsij.mongodb.net/test`
}