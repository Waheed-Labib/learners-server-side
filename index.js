const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

const courses = require('./data/courses.json');
const instructors = require('./data/instructors.json');
const quotations = require('./data/quotations.json');
const blogs = require('./data/blogs.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('learners API running')
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.get('/courses/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(course => course.id == id)
    res.send(selectedCourse)
})

app.get('/instructors', (req, res) => {
    res.send(instructors)
})

app.get('/instructors/:id', (req, res) => {
    const id = req.params.id;
    const selectedInstructor = instructors.find(instructor => instructor.id == id)
    res.send(selectedInstructor)
})

app.get('/quotations', (req, res) => {
    res.send(quotations);
})

app.get('/blogs', (req, res) => {
    res.send(blogs);
})

app.listen(port, () => {
    console.log('learners server running on port', port)
})

