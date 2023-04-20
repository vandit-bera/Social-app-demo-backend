const express = require("express")

const app = express()

const PORT = 4000

app.get("/", (req, res) => {
    res.status(200).send("Hello, Vandit")
})

app.get("/api/v1/instagram", (req, res) => {
    const instagramSocial = {
        username: "vandit.bera",
        followers: 200,
        follows: 206,
        date: Date.now()
    }

    res.status(200).json({ instagramSocial })
})

app.get("/api/v1/linkedin", (req, res) => {
    const linkedSocial = {
        username: "vandit_bera",
        followers: 580,
        follows: 420,
        date: Date.now()
    }

    res.status(200).json( linkedSocial )
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})