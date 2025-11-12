export const getRegisterPage = (req, res) => {
  return res.render("auth/register");
};
export const getLoginPage = (req, res) => {
  return res.render("auth/login");
}; // this basically renders the login and register page
export const postLoginPage = (req, res) => {
  // res.setHeader("Set-Cookie", "loggedIn=true; HttpOnly; Path=/");
  res.cookie("loggedIn", true, {
    httpOnly: true,
  }); // this is another way to set cookies using express's res.cookie method

  res.redirect("/");
};
