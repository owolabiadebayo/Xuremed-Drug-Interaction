const express = require('express');
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')
const {readdirSync} = require('fs')
require('dotenv').config()


mongoose.connect("mongodb+srv://brendanxure:xurecoder2022@cluster0.vzihnbw.mongodb.net/test", { useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('DB connected')).catch(err => console.log("DB connection",err))

app.use(express.json())
app.use(cors());

readdirSync("./route").map((r) => app.use("/api", require(`./route/${r}`)));

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`listening on port ${port}`);
})