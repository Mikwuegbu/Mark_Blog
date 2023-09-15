import React from 'react'
import { useState } from "react";
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlog] = useState([
        { title: 'My New Website', body: 'lorem ipsum...', author: 'Mark', id: 1 },
        { title: 'Welcome party', body: 'lorem ipsum...', author: 'Stephen', id: 2 },
        { title: 'Web Dev tips', body: 'lorem ipsum...', author: 'Mark', id: 3 }
    ])

    const handleDelete = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlog(newBlogs);
    }

    return (
        < div className="home" >
            <BlogList blogs={blogs} title="All Blogs" handleDelete={handleDelete} />

            {/* demostrating Filtering  */}
            {/* <BlogList blogs={blogs.filter((blog) => blog.author === "Mark")} title="Mark's Blog" /> */}
        </div>
    );
}
export default Home