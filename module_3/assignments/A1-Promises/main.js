const btn1 = document.querySelector("#btn1")
const btn2 = document.querySelector("#btn2")


btn1.addEventListener("click", () => {
    let arr = [0,1,2,3,4,5,6,7,8,9]
    let random = arr[Math.floor(Math.random() * arr.length)]
    // console.log(Math.random())
    getInteger(random)
})
function getInteger(num) {
    let myPromise = new Promise((resolved, rejected) => {
        if (num % 2 == 0) {
            resolved("EVEN")
        }
        else {
            rejected("ODD")
        }
    })
    myPromise 
    .then(() => { 
        console.log("Integer = ", num, "is Even"); 
    }) 
    .catch(() => { 
        console.log("Integer = ", num, "is Odd"); 
    });
    console.log(myPromise)
    return myPromise
}

btn2.addEventListener("click", () => {
    let arr = ["apple", null, "lemon", NaN, "orange", undefined, "kiwi", 7, "banana", 9]
    let random = arr[Math.floor(Math.random() * arr.length)]
    getString(random)
})
function getString(input) {
    let myPromise1 = new Promise((resolved, rejected) => {
        if (typeof input == "string") {
            setTimeout(function test() {resolved("string-received") }, 1000 ) 
        }
        else {
            rejected("not-a-string")
        }
    })

    myPromise1 
    .then((data) => { 
        console.log(data, input);  //data = "string-received"
    }) 
    .catch((data) => { 
        console.log(data, input); 
    });
    console.log(myPromise1)
    return myPromise1
}
