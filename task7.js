// Задание 7

arr = [0, null, 1, true, 2, false, 3, "string", 4, undefined, 5, 0.5]

odd = 0
even = 0
zeros = 0
float = 0

for (let i = 0; i < arr.length; i++) {
    if (typeof(arr[i]) == "number") {
        if (arr[i] == 0) {
            console.log("Элемент является нулём.")
            zeros += 1
        } else if (arr[i] % 2 == 0) {
            console.log("Число "+ arr[i] + " чётное.")
            even += 1
        } else if (arr[i] % 2 == 1) {
            console.log("Число "+ arr[i] + " нечётное.")
            odd += 1
        } else {
            console.log("Число "+ arr[i] + " не является целым.")
            float += 1
        }
    } else {
        console.log("Элемент не является числом.")
    }
}

console.log("Количество нулей в массиве: " + zeros)
console.log("Количество чётных чисел в массиве: " + even)
console.log("Количество нечётных чисел в массиве: " + odd)
console.log("Количество чисел с плавающей точкой в массиве: " + float)