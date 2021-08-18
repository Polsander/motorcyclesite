import dbConnect from "../../dbconfig";

const User = require('../../models/User');

const bcrypt = require('bcrypt');

export default async function handler(req, res) {
    dbConnect();

    const { username, password } = req.body

    const [user] = await User.find({ username: username });
    console.log(user)
    

    if (!user) {
        return res.status(406).json({ message: 'user not found' });
    }


    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return res.status(406).json({ message: 'incorrect user input password' });
    }

    return res.status(200).json({ message: 'user found' });
}