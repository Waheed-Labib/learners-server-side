const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('learners API running')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.listen(port, () => {
    console.log('learners server running on port', port)
})

