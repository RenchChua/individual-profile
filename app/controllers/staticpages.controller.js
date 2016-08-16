// can make this into an object and export that object

module.exports.renderAbout = function(req, res) {
  res.render("static_pages/about", {title: 'About us'});
};

module.exports.renderContact = function(req, res) {
  res.render("static_pages/contact", {title: 'Contact'});
};

module.exports.renderHome = function(req, res) {
  res.render("static_pages/index", {title: 'Hello WDI'});
};
