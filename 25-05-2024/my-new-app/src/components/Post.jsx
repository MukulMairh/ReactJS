import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LinearProgress from '@mui/material/LinearProgress';
import PostForm from './PostForm';

function Post() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    useEffect(() => {
        fetchPost();
    }, [])

    const fetchPost = async () => {
        try {
            setLoading(true);
            setErrorMessage("");
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            setLoading(false);
            console.log(response.data);
            if (response.status === 200) {
                setData(response.data);
            }
        } catch (error) {
            console.error("Error fetching posts:", error);
            setLoading(false);
            setErrorMessage(error.message);
        }
    }

    return (
        <div>
            <PostForm></PostForm>
            <h1>Posts</h1>
            <button onClick={fetchPost}>Fetch Post</button>
            {loading && <LinearProgress />}
            {errorMessage && <p>{errorMessage}</p>}
            {/* <LinearProgress variant="buffer" value={progress} valueBuffer={buffer} /> */}
            {
                data.length > 0 && (
                    <table border={1}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map(row => (
                                    <tr key={row.id}>
                                        <td>{row.id}</td>
                                        <td>{row.title}</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                )
            }
        </div>
    );
}

export default Post;
