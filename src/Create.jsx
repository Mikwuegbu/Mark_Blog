import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

function Create() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mark');
    const [isLoading, setisLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        setisLoading(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            setisLoading(false);
            history.push('/');
        })

    }

    return (
        <div className='create'>
            <h1>Add a new Blog</h1>
            <form onSubmit={handleSubmit}>
                <label >Blog Title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Blog title" />
                <label >Blog Body</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)} placeholder="Blog content..."></textarea>
                <label>Blog Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mark">Mark</option>
                    <option value="stephen">Stephen</option>
                </select>
                {!isLoading && <button>Add blog</button>}
                {isLoading && <button disabled>Adding blog...</button>}
            </form>
        </div>
    )
}

export default Create