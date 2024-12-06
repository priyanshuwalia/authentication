const express = require (`express`);
const app = express();
const port = 3000;
app.use(express.json());

const users = [];

app.post(`/signup`, function(req,res){
    const username= req.body.username;
    const password= req.body.password;

    users.push({
        username:username,
        password:password
    })
    
    res.json({
        message: "You are signed in"
    })
})
app.post(`/signin`, function(req,res){
    
})
app.listen(port, ()=>{
    console.log(`this is running on port ${port}`)
})