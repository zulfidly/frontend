// const req = new Promise((resolve, reject) => {
//     reject()
// })
// console.log(req)
const retrieveData1 = (url) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if(0.5 > 0.4) {
                resolve("resolved")
            } else {
                reject()
            }
        }, 2000)
    })
}


retrieveData1("https://jsonplaceholder.typicode.com/users")
    .then(() => {
        console.log("successful retrieval!")
    })
    .catch(() => {
        console.log("error!")
    })

