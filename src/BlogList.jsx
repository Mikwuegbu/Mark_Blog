import { Link } from "react-router-dom/cjs/react-router-dom.min"

function BlogList({ blogs, title, handleDelete }) {

    //outputting a List using map();
    //demostrating the use of react Link

    return (
        <div className="blog-lists">
            <h1>{title}</h1>
            {blogs.map(blogs => (
                <div className="blog-preview" key={blogs.id}>
                    <Link to={`/blogs/${blogs.id}`}>
                        <h2>{blogs.title} </h2>
                        <p>This was written by {blogs.author}</p>
                    </Link>
                </div>
            ))
            }
        </div >
    )
}

export default BlogList