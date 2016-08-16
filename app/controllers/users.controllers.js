module.exports = {
  show: function(req, res){
    var profile = {
      name: "Chua Ren Cheng",
      gitrepo: "https://github.com/RenchChua",
      email: "rench00@gmail.com",
      favquote: "Why have I sought my path with fervent care, if not in hopes to bring my brothers there?"
    };

    res.json(profile);

  }
};
