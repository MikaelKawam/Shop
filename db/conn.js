const mongoose = require('mongoose')

async function main() {
    await mongoose.connect("mongodb://0.0.0.0:27017/testemongoose");
    console.log('Conectou ao mongodb com   moongose')
}

main().catch((err) => console.log(err))



module.exports = mongoose