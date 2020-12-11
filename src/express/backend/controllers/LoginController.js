const dbConn = require("../databases/sqlite.js");
const User = dbConn.User;
module.exports = {
  signup: signup
};
function signup(req, res) {
  const { name, email, password } = req.body;         //Line3
  if (!(name && email && password))                   //Line4
    return res.render("signup", {                     //Line5
      msg: "Please enter all the required details"
    });
  else {
    User.create({           //Line6
      name,
      email,
      password
    })
      .then(user => {       
        if (user) {
          console.log(user);
          return res.render("profile", {        //Line7
            msg: "User successfully created",
            user: user.name
          });
        }
      })
      .catch(err => {
        return res.render("profile", { msg: "Error in creating user" });
      });
  }
}
