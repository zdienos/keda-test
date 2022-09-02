function kecilKeBesar(arr) {
    var end = false
    while (!end) {
        end = true
        for (let i=1; i< arr.length; i++) {
            if (arr[i-1] > arr[i]) {
                end = false;
                var temp = arr[i-1]
                arr[i-1] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr
}

function besarKeKecil(arr) {
    var end = false
    while (!end) {
        end = true
        for (let i=1; i< arr.length; i++) {
            if (arr[i-1] < arr[i]) {
                end = false;
                var temp = arr[i-1]
                arr[i-1] = arr[i]
                arr[i] = temp
            }
        }
    }
    return arr
}

let zed = [1,5,7,9,20,6,13]

console.log(besarKeKecil(zed))
console.log(kecilKeBesar(zed))

module.exports = besarKeKecil, kecilKeBesar;
