import React from 'react'
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter((blog) => blog.id !== id);
    //     setBlog(newBlogs);
    // }
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs');


    return (
        < div className="home" >
            {error && <div>{error} <h1>Error 404!!!</h1> </div>}
            {isLoading && < h3 > Loading...</h3>}
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}

            {/* demostrating Filtering  */}
            {/* {blogs && <BlogList blogs={blogs.filter((blog) => blog.author === "Mark")} title="Mark's Blog" />} */}
        </div >
    );

}
export default Home