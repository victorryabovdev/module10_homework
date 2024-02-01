// Задание 8

let city = new Map();

city.set("name", "New York City")
city.set("state", "The United States of America")
city.set("language", "English")
city.set("population", 8500000)
city.set("capital", true)

for (let [key, value] of city) {
    console.log("Ключ - " + key + ", " + "значение - " + value);
}