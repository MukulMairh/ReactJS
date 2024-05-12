import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'

function User() {

    const initialUser = {
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        error: {
            firstName: "*",
            lastName: "*",
            email: "*",
            gender: "*"
        }
    }
    const [user, setUser] = useState(initialUser);

    const [userList, setUserList] = useState([]);

    const handleChange = (event) => {
        // Destructre name and value from target input element
        const { name, value } = event.target;

        const error = user.error
        switch (name) {
            case "firstName":
                if (value === "") {
                    error.firstName = "Required";
                }
                else if (value.length < 3) {
                    error.firstName = "First name should be larger than 2 letters."
                }
                else {
                    error.firstName = "";
                }
                break;
            case "lastName":
                if (value === "") {
                    error.lastName = "Required";

                }
                else {
                    error.lastName = "";
                }
                break;
            case "email":
                if (value === "")
                    error.email = "Required";
                else
                    error.email = "";
                break;
            case "gender":
                if (value === "")
                    error.gender = "Required";
                else
                    error.gender = "";
                break;
        }


        setUser({
            ...user,
            [name]: value //property name is dynamic here, so it will go like firstName, lastName, email, gender with single line.
        })

        console.log("user => ", user);
    }

    const firstNameInputRef = useRef(null);
    const handleSubmitClick = () => {

        const userKeys = Object.keys(user);
        const userValues = Object.values(user);
        console.log(userKeys);
        console.log(userValues);

        const everyValueShouldNotBeBlank = userValues.every((value) => value !== "");
        console.log(everyValueShouldNotBeBlank);
        if (everyValueShouldNotBeBlank
        ) {
            setUserList([user, ...userList]);
            //clear form after submit 
            setUser(initialUser);
            firstNameInputRef.current.focus();
        }
    }

    const errorStyle = { color: 'red' }
    return (

        <div>
            <hr />
            <h1>User Form</h1>
            <br />
            First Name<input type="text" placeholder='First Name' name='firstName' value={user.firstName} onChange={handleChange} ref={firstNameInputRef}
            />
            <span style={errorStyle}>{user.error.firstName}</span>
            <br />
            Last Name<input type="text" placeholder='Last Name' name='lastName' value={user.lastName} onChange={handleChange} />
            <span style={errorStyle}>{user.error.lastName}</span>
            <br />
            Email <input type="text" placeholder='' name='email' value={user.email} onChange={handleChange} />
            <span style={errorStyle}>{user.error.email}</span>
            <br />
            Gender : <input type="radio" name='gender' value="Male" checked={user.gender === "Male"} onChange={handleChange} />Male
            <input type="radio" name='gender' value="Female" checked={user.gender === "Female"} onChange={handleChange} />Female
            <span style={errorStyle}>{user.error.gender}</span>
            <br />
            <button onClick={handleSubmitClick}>
                Submit
            </button>

            <h3>User List</h3>
            {
                userList.length === 0 ? (
                    <p>No users.</p>
                ) : (<table border={1}>
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            userList.map((value, index) => (
                                <tr key={index}>
                                    <td>{value.firstName}</td>
                                    <td>{value.lastName}</td>
                                    <td>{value.email}</td>
                                    <td>{value.gender}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>)
            }

        </div>
    )
}

export default User
