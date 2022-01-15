const express = require('express');



const app = express();

app.use(express.json());

const courses = [
    {
        id :1 , 
        name :"gen"
    },
    {
        id : 2,
        name : "broop"
    },
    {
        id : 3,
        name : "deepo"
    }

];

app.get('/',(req,res)=>{
     res.send(courses);
});

app.get('/api/courses/:id',(req,res)=>{
    const course = courses.find(
        c => c.id === parseInt(req.params.id)
    ) ;
    if(!course){
        res.status(404)
        .send(`The course with given is was not founded ${req.params.id}`)

    }
    res.send(course);
});

app.post('/api')

app.listen(3000,()=>{
    console.log("server is running");
})