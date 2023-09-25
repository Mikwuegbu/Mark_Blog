import { useState, useEffect } from 'react'

const useFetch = (url) => {

    //making a custom hook

    const [data, setBlog] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
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
                    setError(err.message);
                    setIsLoading(false);
                });
        }, 200);
    }, [url]);

    return { data, isLoading, error }

}

export default useFetch;