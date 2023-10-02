import React from 'react'

const EditBlog = () => {

    return (
        <div className='editblog'>
            <h1>Edit Blog</h1>
            <form >
                <label >Blog Title:</label>
                <input type="text" required />
                <label >Blog Body</label>
                <textarea required></textarea>
                <label>Blog Author</label>
                <select>
                    <option value="mark">Mark</option>
                    <option value="stephen">Stephen</option>
                </select>
                {/* <button>Submitting...</button> */}
                <button>Submit</button>
            </form>
        </div>
    )
}

export default EditBlog