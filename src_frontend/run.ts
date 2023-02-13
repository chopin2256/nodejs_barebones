window.addEventListener("load", function () {
    // Source code goes here
    let arr: Array<number> = [1, 2, 3]
    runNumbers(arr)
});

function runNumbers(arr: Array<number>) {
    if (arr.length > 0) {
        arr.forEach(x => {
            console.log(x)
        })
    }
}