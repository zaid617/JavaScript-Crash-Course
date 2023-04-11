function adder(num1) {
  return function (num2) {
    console.log(num1 + num2);
  };
}

let add = adder(2);
let add2 = adder(3);

add("add : ", 3);
add2("add2 : ", 3);
