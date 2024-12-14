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
    console.log(username, password)
    if (username == 'admin' && password == 'nimda') {
        res.json({ statusCode: 200, data: { name: 'admin' } })
    } else if (username == 'user' && password == 'resu') {
        res.json({ statusCode: 200, data: { name: 'user' } })
    } else {
        res.status(401)
        res.json({ statusCode: 401, error: '越权访问' })
    }
})
app.post('/isLogin', (req, res) => {
    const data = req.body
    const { token } = data
    if (token == 'admin') {
        res.json({ statusCode: 200 })
    } else if (token == 'user') {
        res.json({ statusCode: 200 })
    } else {
        res.status(401)
        res.json({ statusCode: 401, error: '越权访问' })
    }
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})