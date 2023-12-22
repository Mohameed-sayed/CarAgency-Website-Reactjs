const conn = require("../db/dbConnection");
const util = require("util");//helper
const authorized= async(req,res,next)=>{
const query=util.promisify(conn.query).bind(conn);
const {token} = req.headers;
const user    = await query("select * from users where token=?",[token]);
if (user[0]) {next();
}else{
    res.status(403).json({
msg:"you are not authorized to acces this route !",}
);
}
};
module.exports = authorized;