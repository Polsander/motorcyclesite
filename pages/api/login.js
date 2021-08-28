import dbConnect from "../../dbconfig";
import withSession from "../../lib/session";

const User = require('../../models/User');
const bcrypt = require('bcrypt');

export default withSession(async (req, res) => {
    dbConnect();

    const { username, password } = req.body

    const [user] = await User.find({ username: username });
    
    if (!user) {
        return res.status(401).json({ loggedIn: false });
    }


    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        return res.status(401).json({ loggedIn: false });
    }
    try{
        const account = {
            username: user.username,
            email: user.email,
            id: user._id
        }
        req.session.destroy(); // logout any existing sessions incase the user manages to log in. This will prevent memory leaks
        req.session.set('user', account); // login the user by setting the session
        await req.session.save(); // save the session - remember that is is a promise!
    } catch(e) {console.log(e)}

    return res.status(200).json({loggedIn: true});
});