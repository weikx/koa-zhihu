module.exports = {
  screct: process.env.TOKEN_SCRECT,
  connectionStr: `mongodb+srv://weikx:${process.env.MONGO_PASS}@cluster0-fpsij.mongodb.net/test?retryWrites=true&w=majority`
}