import React, { useCallback, useEffect, useMemo, useReducer } from 'react'
import { useRef } from 'react';
import { useState } from 'react'

function User() {

    const initialUser = {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        gender: "",
        error: {
            id: "Required",
            firstName: "Required*",
            lastName: "Required*",
            email: "Required*",
            gender: "Required*"
        }
    }
    const [user, setUser] = useState(initialUser);

    // const [userList, setUserList] = useState([]);

    const [disableInputId, setDisableInputId] = useState(false);//for edit

    const INSERT = "INSERT";
    const UPDATE = "UPDATE";
    const DELETE = "DELETE";
    const USER_CHANGE = "USER_CHANGE";
    /**
     * action {type: "Insert", payload: newUser}
     * action {type: "Update", payload: updateUser }
     * action {type: "Delete", payload: deleteUser}
     * => reducer function will return update state
     * => we write logic based on action, type and return updated state
     * => dispatch will help you to make any changes with state variable
     * 
     * use Reducer > reducer and data 
     *  
     */
    const reducer = (state, action) => {
        //action => insert, update, delete 

        switch (action.type) {
            case INSERT:
                //new user=>action.payload
                return [action.payload, ...state];
                break;
            case UPDATE:
                const { payload: user } = action;
                const copyUserList = [...state];
                const userIndex = state.findIndex(userValue => userValue.id === user.id);
                copyUserList.splice(userIndex, 1, user);
                return copyUserList;
                break;
            case DELETE:
                const { payload: deleteUser } = action;
                debugger;
                const userListAfterDelete = state.filter(userValue => userValue.id !== deleteUser.id);
                return userListAfterDelete;
                break;
            case USER_CHANGE:
            //this one is for validation. 

            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, []);//reducer state 

    const firstIdFocusRef = useRef(null);
    useEffect(() => {
        if (firstIdFocusRef) {
            firstIdFocusRef.current.focus();
        }
    }, [firstIdFocusRef])


    const handleChange = (event) => {
        // Destructre name and value from target input element
        const { name, value } = event.target;

        const error = user.error
        switch (name) {
            case "id":
                if (value === "") {
                    error.id = "Required";
                }
                else {
                    error.id = "";
                }
                break;
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

        // console.log("user => ", user);
    }


    // const firstNameInputRef = useRef(null);

    const handleSubmitClick = () => {
        const userKeys = Object.keys(user);
        const userValues = Object.values(user);
        console.log(userKeys);
        console.log(userValues);

        const everyValueShouldNotBeBlank = userValues.every((value) => value !== "");
        console.log(everyValueShouldNotBeBlank);
        if (everyValueShouldNotBeBlank
        ) {

            if (disableInputId) {
                //update user
                // const copyUserList = [...userList];
                // const userIndex = userList.findIndex(userValue => userValue.id === user.id);
                // copyUserList.splice(userIndex, 1, user);
                // setUserList(copyUserList);

                dispatch({ type: UPDATE, payload: user });
                setDisableInputId(false);

            }
            else {
                //insert new user 
                // setUserList([user, ...userList]);
                dispatch({ type: INSERT, payload: user });
            }

            //clear form after submit 
            setUser(initialUser);
            // firstNameInputRef.current.focus();
            firstIdFocusRef.current.focus();
        }
    }

    const errorStyle = { color: 'red' }


    /**
     * Update User 
     * For update and delete user we need to send the user itself, where as in case of checking the changes we used to send event as parameter.*/
    const updateUser = (editUser) => {
        console.log(editUser);
        setUser(editUser);
        setDisableInputId(true);
    };
    /**
     * Delete User
     */
    const deleteUser = useCallback((deleteUser) => {
        console.log(deleteUser);
        const result = window.confirm(`Are you sure you want to delete ${deleteUser.firstName} ${deleteUser.lastName}`);
        if (result) {
            dispatch({ type: DELETE, payload: deleteUser });
            // const userListAfterDelete = userList.filter(userValue => userValue.id !== deleteUser.id);
            // setUserList(userListAfterDelete); 
        }
    }, []);

    /**
     * reset Button Fucntion
     */
    const resetUser = () => {
        setDisableInputId(false);
        setUser(initialUser);
        firstIdFocusRef.current.focus();
    }

    /**
     * useCallback => Catch function 
     * I will return function 
     * 
     * useMemo => Catch result of function  
     */

    //What should I do when  don't have a separate table component? 
    const userListtableData = useMemo(() => state, [state]);

    return (

        <div>
            <hr />
            <h1>User Form</h1>
            <br />
            ID<input type="text" placeholder='Enter your ID' name='id' value={user.id} onChange={handleChange} ref={firstIdFocusRef}
                disabled={disableInputId} />
            <span style={errorStyle}>{user.error.id}</span>
            <br />
            First Name<input type="text" placeholder='First Name' name='firstName' value={user.firstName} onChange={handleChange}
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
            <button onClick={() => { resetUser() }}>Reset</button>

            <h3>User List</h3>
            {
                // userList 
                //state
                userListtableData.length === 0 ? (
                    <p>No users.</p>
                ) : (<table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Gender</th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            userListtableData.map((value, index) => (
                                <tr key={index}>
                                    <td>{value.id}</td>
                                    <td>{value.firstName}</td>
                                    <td>{value.lastName}</td>
                                    <td>{value.email}</td>
                                    <td>{value.gender}</td>
                                    <td>
                                        <button onClick={() => { updateUser(value) }}>Update</button>&nbsp;
                                        <button onClick={() => { deleteUser(value) }}>Delete</button>&nbsp;

                                    </td>
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
