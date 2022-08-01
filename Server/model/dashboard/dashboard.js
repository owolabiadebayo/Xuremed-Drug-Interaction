const mongoose = require("mongoose");


const interactionsSchema = new mongoose.Schema({
    interaction1:[{
        drugbank_id1: String,
        name1: String
    }],
    interaction2:[{
        drugbank_id2: String,
        name2: String
    }],
    interaction3:[{
        action: String,
        severity: String
    }], 
})

export default mongoose.model("Dashboard", interactionsSchema)



