const jwt  = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// require("dotenv").config();
const db = require("../models/User.js");

// const sessionCheck = (req,res,next)=>{
//     try{
//         let accessToken = req.header.token;
//         const verification= jwt.verify(accessToken,process.env.JWT_SECRET);
//         console.log("Token Verified")
//         console.log(verification.payload)
//         req.access = verification.payload;
//         next();
        
//     }catch(err){
//         if (err instanceof jwt.TokenExpiredError) {
//             res.status(401).send({
//               message: "Token Expired",
//             });
//           } else if (err instanceof jwt.JsonWebTokenError) {
//             res.status(401).send({
//               message: "Token Invalid",
//             });
//           } else {
//             res.send({
//               message: "Error",
//               error: `${err}`,
//             });
//     }
// }
// }
const verifyToken = (req, res, next) => {
  if (req?.headers?.authorization?.split(" ")[0] === "JWT") {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      "asdf",
      function (err, decode) {
        if (err) {
          return res.status(400).send(err);
        }
        db.findOne({
          id: decode.id,
        }).exec((err, user) => {
          if (err) {
            res.status(500).send({ message: "not found" });
          } else {
            req.user = user;
            next();
          }
        });
      }
    );
  } else {
    return res.status(400).send({ message: "invalid user" });
  }
};


module.exports = verifyToken;
