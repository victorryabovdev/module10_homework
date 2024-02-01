// Задание 6

arr = [1, 2, 3, 2, 1]

while (arr.length > 0) {
    for (let i = 0; i < arr.length; i + 0) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr[j]) {
                console.log(true)
            } else {
                console.log(false)
            }
        }
        arr.shift()
        console.log(arr)
    }
}