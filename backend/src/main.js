import express from 'express'
import multer from 'multer';
import bodyParser from 'body-parser'

const app = express()
const port = 3003
const forms = multer();

app.use(bodyParser.json())
app.use(forms.array());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.post('/login', (req, res) => {
    const data = req.body
    const { username, password } = data
    if (username == 'admin' && password == 'nimda') {
        res.json({ statusCode: 200, data: { name: 'admin',token:'token' } })
    } else {
        res.status(401)
        res.json({ statusCode: 401 })
    }
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})