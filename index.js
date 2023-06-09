const express = require("express")

const format = require("date-format")

const app = express()

// Swagger api
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs')
const swaggerDocument = YAML.load('./swagger.yaml');

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const PORT = 4000

app.get("/", (req, res) => {
    res.status(200).send("Hello, Vandit")
})

app.get("/api/v1/instagram", (req, res) => {
    const instagramSocial = {
        username: "vandit.bera",
        followers: 200,
        follows: 206,
        date: format.asString("dd:MM:yy -- hh:mm:ss", new Date())
    }

    res.status(200).json({ instagramSocial })
})

app.get("/api/v1/linkedin", (req, res) => {
    const linkedSocial = {
        username: "vandit_bera",
        followers: 580,
        follows: 420,
        date: format.asString("dd:MM:yy -- hh:mm:ss", new Date())
    }

    res.status(200).json( linkedSocial )
})

app.get("/api/v1/:token", (req, res) => {
    res.status(200).json({ paramtoken: req.params.token })
})

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`)
})