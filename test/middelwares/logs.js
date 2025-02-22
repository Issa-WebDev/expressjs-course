function myMiddleWares(req, res, next) {
  console.log("name: issa");
  console.log("age: 22");
  console.log("job: dev fullstack");
  next();
}

export default myMiddleWares;
