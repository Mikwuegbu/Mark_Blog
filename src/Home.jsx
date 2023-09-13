import React from 'react'

const Home = () => {

    const handleClick = () => {
        alert('Hello NInjas');
    }

    return (
        <div className="home">
            <h2>HomePage is lit</h2>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default Home