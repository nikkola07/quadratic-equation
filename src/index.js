module.exports = function solveEquation(equation) {
  // your implementation
  var a,b,c,d,x1,x2;
  var arr = [];
  equation = equation.replace(/\s/g, "").replace(/\^2/, "").replace(/\*x/g, " ").split(" ");

  a = +equation[0];
  b = +equation[1];
  c = +equation[2];

  d = b*b - 4*a*c;

  x1 = Math.round((-b + Math.sqrt(d))/(2*a));
  x2 = Math.round((-b - Math.sqrt(d))/(2*a));
  
  arr.unshift(x1,x2)

  arr.sort(function(a,b) {
  	return a-b;
  });
  return arr;
}
