const addNumber = (num1, num2) => {
    //resolve = success
    //reject = error

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num1 < 0 || num2 < 0)
                reject("Negative number not allowed")
            else
                resolve(num1 + num2)
        }, 2000)
    })
}

addNumber(10, 30).then((sum) => {
    //resolve method 
    console.log("sum", sum);
    return addNumber(sum, -40); //return promise
}).then(sum => {
    console.log("sum", sum);
}).catch((error) => {
    console.log("Error", error)
})