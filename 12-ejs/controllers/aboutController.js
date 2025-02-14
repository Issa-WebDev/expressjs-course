const aboutController = (req, res) => {
  const users = {
    id: 1234,
    name: "KissCoder",
    age: 22,
  };
  res.render("about", users);
};

export default aboutController;
