function BlogList({ blogs, title, handleDelete }) {


    return (
        <div className="blog-lists">
            <h1>{title}</h1>
            {blogs.map(blogs => (
                <div className="blog-preview" key={blogs.id}>
                    <h2>{blogs.title} </h2>
                    <p>This was written by {blogs.author}</p>

                </div>
            ))
            }
        </div >
    )
}

export default BlogList