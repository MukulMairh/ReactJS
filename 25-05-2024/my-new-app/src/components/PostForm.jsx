import axios from 'axios';
import React, { useState } from 'react'

const PostForm = () => {
    const [post, setPost] = useState({
        title: "",
        body: ""
    });

    const handleFormSubmit = async (event) => {
        //event.preventDefault help us by bit refreshing the page
        event.preventDefault();

        try {
            const responseData = await axios.post("https://jsonplaceholder.typicode.com/posts", post);
            console.log("response=> ", responseData);

            if (responseData.status === 201) {
                alert("Inserted Successfully!");
            }

        } catch (error) {

            alert("Could not Insert", error.message);

        }
    }

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPost({
            ...post,
            [name]: value
        })
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input type="Enter Title" name='title' value={post.title}
                onChange={handleInputChange} placeholder='Enter title' />
            <input type="Enter Body" name='body' value={post.body}
                onChange={handleInputChange} placeholder='Enter Body' />
            <br />
            <input type="Submit" value="Submit" />
        </form>
    )
}

export default PostForm
