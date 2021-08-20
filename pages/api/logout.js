import withSession from "../../lib/session";

export default withSession(async (req,res) => {

    await req.session.destroy();
    res.json({message: 'user logged out'});
})