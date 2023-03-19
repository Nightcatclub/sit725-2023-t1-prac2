var express = require("express");
var app = express();
var port = process.env.port || 3000;

function complexMath(num1, num2) {
  return parseInt(num1) + parseInt(num2);
}

app.get("/addTwoNumbers", (req, res) => {
  var number1 = req.query.number1;
  var number2 = req.query.number2;
  var result = complexMath(number1, number2);
  res.json({ statusCode: 200, data: result, message: "Success plus" });
});

app.listen(port, () => {
  console.log("App listening to: " + port);
});
