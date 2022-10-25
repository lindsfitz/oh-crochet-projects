const express = require('express')
const path = require('path')
const PORT = 3001;

const app = express();
const projectData = require('./db/projects.json');

app.use(express.static('public'))

app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname,'/public/index.html'))
})

app.get('/api/projects', (req,res) => {
    console.log('projects requested');
    res.json(projectData)
})


app.listen(PORT, () => console.log(`APP RUNNING on ${PORT}`))