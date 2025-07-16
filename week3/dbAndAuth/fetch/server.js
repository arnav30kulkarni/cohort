const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.json())
 app.use(cors())

app.get("/", (_, res) => {
    const db = {
        msg: "HELLO WOLRD",
        user: "ARNAV"
    }
    res.json(db);
})

app.listen(5000, ()=> {
    console.log("Listening at 5000");
})