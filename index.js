const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const users = [];

// Function to generate a random 32-character token
function generateToken() {
    let options = "abcdefghijklmnopqrstuvwxyz";
    let token = "";
    for (let i = 0; i < 32; i++) {
        token += options[Math.floor(Math.random() * options.length)];
    }
    return token;
}

// Signup route
app.post("/signup", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    });

    res.json({
        message: "You are signed up!"
    });
});

// Signin route
app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    const foundUser = users.find(function (u) {
        return u.username === username && u.password === password;
    });

    if (foundUser) {
        const token = generateToken();
        res.json({
            message: "You are signed in!",
            token: token
        });
    } else {
        res.status(401).json({
            message: "Invalid username or password."
        });
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
