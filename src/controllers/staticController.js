module.exports = {
  index(req, res, next){
    res.render("static/index", {title: "Blocipedia: Home of Useless Knowledge"});
  }
}
