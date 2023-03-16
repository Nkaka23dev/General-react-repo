import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState("")

    useEffect(() => {
        setTimeout(() => {
            fetch(url)
                .then((res) => {
                    if (!res.ok) {
                        throw new Error(
                            "Something bad happened can't access the resources"
                        );
                    }
                    return res.json();
                })
                .then((data) => {
                    setData(data);
                    setIsloading(false);
                    setError(null)
                })
                .catch((err) => {
                    setError(err.message)
                    setIsloading(false)
                });
        }, 1500);
    }, []);

    return { data, isLoading, error }
}

export default useFetch;