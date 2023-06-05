const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())



app.get('/', (req, res) => {
    res.send('learners API running')
})

console.log('check')

app.listen(port, () => {
    console.log('learners server running on port', port)
})

