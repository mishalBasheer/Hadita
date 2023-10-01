const showLanding = (req, res) => {
  res.render("user/landingPage");
};
const showContact = (req, res) => {
  res.render("user/contact");
};
const showServices = (req, res) => {
  res.render("user/services");
};
const showAbout = (req, res) => {
  res.render("user/about-us");
};
const showBlog = (req, res) => {
  res.render("user/blogs");
};
const showBlogDetails = (req, res) => {
  res.render("user/blog-details");
};

export {
  showLanding,
  showContact,
  showServices,
  showAbout,
  showBlog,
  showBlogDetails,
};
