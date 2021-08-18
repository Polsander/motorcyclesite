import dbConnect from "../../dbconfig";

const User = require('../../models/User');
const bcrypt = require('bcrypt');
const saltRounds = 10;

export default async function handler(req, res) {
    try {
        dbConnect();

        const { username, email, password } = req.body;

        bcrypt.hash(password, saltRounds, async function (err, hash) {
            const result = await new User({ username: username, email: email, password: hash })
            await result.save();
            console.log(result);
        })
    } catch(e) {console.log(e)}
    
    res.status(200).json({ message: 'user registered' });
}