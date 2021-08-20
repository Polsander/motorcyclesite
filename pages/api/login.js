import dbConnect from "../../dbconfig";
import withSession from "../../lib/session";

const User = require('../../models/User');
const bcrypt = require('bcrypt');

export default withSession(async (req, res) => {
    dbConnect();

    const { username, password } = req.body

    const [user] = await User.find({ username: username });
    
    if (!user) {
        return res.status(406).json({ message: 'user not found' });
    }


    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return res.status(406).json({ message: 'incorrect user input password' });
    }
    try{
        const account = {
            username: user.username,
            email: user.email,
        }
        req.session.destroy(); // logout any existing sessions incase the user manages to log in. This will prevent memory leaks
        req.session.set('user', account); // login the user by setting the session
        await req.session.save(); // save the session - remember that is is a promise!
    } catch(e) {console.log(e)}

    console.log(req.session.get('user'));
    return res.status(200).json({ message: 'user found' });
});