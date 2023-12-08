const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
console.log(fruits.sort());
console.log(fruits.sort((a, b) => a.localeCompare(b)));
console.log(fruits.sort((a, b) => b.localeCompare(a)));