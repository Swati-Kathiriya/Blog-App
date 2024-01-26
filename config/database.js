const mongoose = require("mongoose");

require("dotenv").config();

const connectWithDb = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser:true,
        // useUnifiedTopolog: true,
    })
    .then(() => console.log("DB Connected is Successful"))
    .catch( (error) => {
        console.log("Db facing connection Issue");
        console.error(error );
        process.exit(1);
    } )
}; 

module.exports = connectWithDb;