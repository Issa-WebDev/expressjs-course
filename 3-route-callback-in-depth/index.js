import express from "express";
const app = express();
const port = 1000;

// more than more callBack
// app.get(
//   "/",
//   (req, res, next) => {
//     console.log("first callBack");
//     next();
//   },
//   (req, res) => {
//     res.send("<h1> Second CallBack</h1>");
//   }
// );

// array callback
// const callBack1 = (req, res, next) => {
//   console.log("callback 1");
//   next();
// };

// const callBack2 = (req, res, next) => {
//   console.log("callback 2");
//   next();
// };

// const callBack3 = (req, res, next) => {
//   res.send("<h1>Array CallBack </h1>");
// };
// app.get("/", [callBack1, callBack2, callBack3]);

// crazyness
const cb1 = (req, res, next) => {
  console.log("first callback");
  next();
};
const cb2 = (req, res, next) => {
  console.log("second callback");
  next();
};

app.get(
  "/crazyness",
  [cb1, cb2],
  (req, res, next) => {
    console.log("third callback");
    next();
  },
  (req, res, next) => {
    console.log("fourth callback");
    next();
  },
  (req, res) => {
    res.send("<h1> CRAZYNESS </h1>");
  }
);

app.listen(port, () =>
  console.log(`server is running on  http://localhost:${port}`)
);
