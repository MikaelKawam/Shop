const mongoose = require('mongoose')

async function main() {
    await mongoose.connect("mongodb+srv://book1:book1@cluster0.xgwsnin.mongodb.net/?retryWrites=true&w=majority')
}

main().catch((err) => console.log(err))



module.exports = mongoose
