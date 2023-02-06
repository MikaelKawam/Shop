const mongoose = require('mongoose')

async function main() {
    await mongoose.connect("mongodb+srv://book:book@cluster0.xgwsnin.mongodb.net/?retryWrites=true&w=majority')
}

main().catch((err) => console.log(err))



module.exports = mongoose
