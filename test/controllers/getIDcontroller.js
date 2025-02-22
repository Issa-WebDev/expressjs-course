const getIDcontroller = (req, res) => {
  const { id } = req.params;
  const { query } = req.query;
  res.send(`<h1>your ID : ${id} and the resquest => ${query}</h1>`);
};

export default getIDcontroller;
