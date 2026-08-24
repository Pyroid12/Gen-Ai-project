const dns = require("dns")
const mongoose = require("mongoose")

dns.setServers(["8.8.8.8", "8.8.4.4"])

async function connectToDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI)
        console.log("Connected to Database")
    } catch (err) {
        console.error("Database connection failed:", err.message)
        throw err
    }
}

module.exports = connectToDB