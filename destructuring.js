const user = {
    firstName: 'Test',
    lastName: 'Testing',
    email: 'test@gmail.com'
}

//Destructuring, is a shallow copy 
const { firstName, lastName } = user;

console.log('FirstName', firstName);
console.log('LastName', lastName);

const displayUserName = ({
    firstName, lastName
}) => {
    console.log(firstName + '' + lastname);
}
displayUserName(user);


//Spread operator, as destructuring will require you to do it for each element
//Spread opertor is a deep copy 
const userCopy = { ...user };
console.llog(userCopy);