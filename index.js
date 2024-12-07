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
    console.log(users);
});

// Signin route
app.post("/signin", function (req, res) {
    const username = req.body.username;
    const password = req.body.password;

    // Find the user in the users array
    const foundUser = users.find((u) => u.username === username && u.password === password);

    if (foundUser) {
        // Generate a token and store it in the user object
        const token = generateToken();
        foundUser.token = token;

        res.json({
            message: "You are signed in!",
            token: token
        });
    } else {
        res.status(401).json({
            message: "Invalid username or password."
        });
    }
    console.log(users);
});
app.get("/users", function (req, res) {
    res.json(users);
});


// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
