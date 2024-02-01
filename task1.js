// Задание 1

a = prompt("Введите значение");

a++;
a--;

if (typeof(a) == "number" && isNaN(a)) {
    console.log("Не число.")
} else {
    if (typeof(a) == "number") {
        if (a % 2 == 0) {
            console.log("Число " + a + " чётное.")
        } else if (a % 2 == 1) {
            console.log("Число " + a + " нечётное.")
        }
    } else if (typeof(a) == "string") {
        console.log("Упс, кажется, вы ошиблись.")
    }
}