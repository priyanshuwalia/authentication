const express = require (`express`);
const app = express();
const port = 3000;
app.use(express.json());

const users = [];
// should return a  token. thats it! 
function generateToken(){
    let options = [`a`, `b`, `d`, `e`, `f`, `g`, `h`, `i`, `k`, `l`, `m`, `n`, `o`, `p`, `q`, `r`, `s`, `t`, `u`, `v`, `w`, `x`, `y`, `z`]
    let token= "";
    for(let i; i<32; i++){
        token= token+options[Math.floor(Math.random()* options.length)];
    }
    return token;
}


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
    const username= req.body.username;
    const password= req.body.password;

    const user = users.find(function(u){
        if (u.username== username && u.password == password){
            return true;
        } else{
             return false;
        }
    })
    
})
app.listen(port, ()=>{
    console.log(`this is running on port ${port}`)
})