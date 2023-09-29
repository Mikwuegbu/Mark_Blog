import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from './useFetch';
//demostrating  route parameter (Dynamic routing)

export const BlogDetails = () => {
    const { id } = useParams();
    const { data: blogs, isLoading, error } = useFetch('http://localhost:8000/blogs/' + id);

    return (
        <div className="blog-details">
            {isLoading && <h3>Loading...</h3>}
            {error && <div>{error} <h1>Error 404!!!</h1> </div>}
            {blogs && (
                <article>
                    <h2>{blogs.title}</h2>
                    <p>Written by {blogs.author}</p>
                    <div>{blogs.Body}</div>
                </article>
            )}

        </div>
    )
}

export default BlogDetails;
