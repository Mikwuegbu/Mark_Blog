import { useState, useEffect } from 'react'

const useFetch = (url) => {

    // making a custom hook for reusability

    const [data, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        // Implementing a Clean up code to handle Unmounted Error

        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
                .then(res => {
                    if (!res.ok) {
                        throw Error('Sorry! We couldn\'t find the resources')
                    }
                    return res.json();
                })
                .then(data => {
                    setBlog(data);
                    setIsLoading(false);
                    setError(null);
                })
                .catch(err => {
                    if (err.name === 'AbortError') {
                        console.log('fetch Aborted')
                    } else {
                        setError(err.message);
                        setIsLoading(false);
                    }
                });
        }, 200);
        return () => console.log('Clean Up!');
    }, [url]);

    return { data, isLoading, error }

}

export default useFetch;