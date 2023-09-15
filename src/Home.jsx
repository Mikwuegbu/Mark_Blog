import React from 'react'
import { useState } from "react";
import BlogList from './BlogList';

const Home = () => {

    const [blogs, setBlog] = useState([
        { title: 'My New Website', body: 'lorem ipsum...', author: 'Mark', id: 1 },
        { title: 'Welcome party', body: 'lorem ipsum...', author: 'Stephen', id: 2 },
        { title: 'Web Dev tips', body: 'lorem ipsum...', author: 'Mark', id: 3 }
    ])

    return (
        < div className="home" >
            <BlogList blogs={blogs} />
        </div>
    );
}
export default Home