import app from './server.js'

// eslint-disable-next-line no-undef
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}! 🚀`)
});