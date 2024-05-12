const addNumber = (num1, num2) => {
    //resolve = success
    //reject = error

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num1 < 0 || num2 < 0)
                reject("Negative number not allowed")
            else
                resolve(num1 + num2)
        }, 1000)
    })
}

(async () => {
    try {

        const result1 = await addNumber(10, 20);
        const result2 = await addNumber(result1, 30);
        const result3 = await addNumber(result2, 30);

        console.log("Result 1= ", result1);
        console.log("Result 2= ", result2);
        console.log("Result 3= ", result3)
    }
    catch (error) {
        console.log("Error", error)
    }
}

)();

