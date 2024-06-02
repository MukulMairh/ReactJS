import React, { useEffect, useState } from 'react';
import axios from 'axios';
import LinearProgress from '@mui/material/LinearProgress';
import { Pagination } from '@mui/material';
import PostForm from './PostForm';

function Post() {
    const [data, setData] = useState([]);
    const [pageData, setPageData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [totalpage, setTotalPage] = useState(0);
    const [page, setPage] = useState(0);
    const PER_PAGE_DATA = 14;

    useEffect(() => {
        fetchPost();
    }, [])

    useEffect(() => {
        if (data.length > 0) {
            setTotalPage(Math.ceil(data.length / PER_PAGE_DATA));
            setPage(1);
        }
    }, [data]);

    const handleChangePagination = (event, value) => {
        setPage(value);
    }

    /**
     * This useEffect is used for reducing the code from above 2 functions.
     */
    useEffect(() => {
        /**page 1 => 0 to 9 
         * page 2 => 10 to 19
         * page 3 =>  20 to 29
         * 
         */
        const startIndex = (page - 1) * PER_PAGE_DATA;
        const endIndex = (page * PER_PAGE_DATA);
        const sliceData = data.slice(startIndex, endIndex);
        setPageData(sliceData);

    }, [page])


    //GET all posts 
    const fetchPost = async () => {
        try {
            setLoading(true);
            setErrorMessage("");
            // const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            console.log(process.env);
            console.log(process.env.REACT_APP_API_BASE_URL);

            console.log(`${process.env.REACT_APP_API_BASE_URL}/posts`);
            const response = await axios.get(`${process.env.REACT_APP_API_BASE_URL}/posts`);
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
                // data.length > 0 && (
                pageData.length > 0 && (
                    <>
                        <table border={1}>
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Title</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    // data.map(row => (
                                    pageData.map(row => (
                                        <tr key={row.id}>
                                            <td>{row.id}</td>
                                            <td>{row.title}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                            <Pagination count={totalpage} page={page} onChange={handleChangePagination} ></Pagination>
                        </table>
                    </>
                )
            }
        </div>
    );
}

export default Post;
