// middlewares
function myMwares(req, res, next) {
  console.log("name : Issa");
  console.log("email : Issa@gmail.com");
  console.log("password : 14@ssa");
  next();
}

export default myMwares;
