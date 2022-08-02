const express = require('express');
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const {readdirSync} = require('fs')
require('dotenv').config()


mongoose.connect("mongodb+srv://Bayo4real:Bayo4real@hms.qg1nt.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('DB connected')).catch(err => console.log("DB connection",err))

app.use(express.json())
app.use(cors());

readdirSync("./route").map((r) => app.use("/api", require(`./route/${r}`)));

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})