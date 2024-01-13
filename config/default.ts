
const dbUser = process.env.DB_USERNAME
const dbPassword = process.env.DB_PASSWORD

module.exports = {
    PORT : 3333,
    otherProperty : "jhudoamor",
     
    dbUri : `mongodb+srv://${dbUser}:${dbPassword}@cluster0.iehuwlr.mongodb.net/?retryWrites=true&w=majority`,
    env : process.env.ENV
}