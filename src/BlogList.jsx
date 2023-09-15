function BlogList(props) {

    const blog = props.blogs;

    return (
        <div className="blog-lists">
            {blog.map(blogs => (
                <div className="blog-preview">
                    <h2>{blogs.title} </h2>
                    <p>This was written by {blogs.author}</p>
                </div>
            ))
            }
        </div>
    )
}

export default BlogList