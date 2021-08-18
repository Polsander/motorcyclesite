import dbConnect from "../../dbconfig";

export default function handler(req,res) {
    dbConnect();
    console.log(dbConnect)
    res.status(200).json({success: 'true'});
}