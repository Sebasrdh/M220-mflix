module.exports = async function() {
  console.log("Teardown Mongo Connection")
  global.mflixClient = null
  global.mflixDB = null
}
