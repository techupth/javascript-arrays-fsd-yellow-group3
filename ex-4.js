const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];

// Start coding here
employees.unshift({
  name: "Kody",
  age: 19,
  hobbies: ["Computer Game", "Wakeboard"],
});
employees.unshift({
  name: "Alicia",
  age: 29,
  hobbies: ["Shopping", "Reading novel"],
});

console.log(employees);
