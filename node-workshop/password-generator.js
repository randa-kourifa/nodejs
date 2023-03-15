import generator from "generate-password";

var passwords = generator.generate({
  length: 10,
  numbers: 5,
  uppercase: 2,
});

console.log(passwords);
