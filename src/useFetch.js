import { useEffect, useState } from "react";
const base_url = "https://rickandmortyapi.com/api/"

export const useFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = (endpoint) => {
        fetch(base_url + endpoint)
        .then((res) => {
            if (!res.ok) throw Error("Bad Request");
            return res.json();
        })
        .then((resOk) => {
            setData(resOk);
            setTimeout(() => {
              setIsLoading(false)  
            }, 1000);
        })
        .catch((err)=>{
            setIsLoading(false)
            setError(err.message)
        });
    };

    useEffect(() => {
        getData(endpoint);
    },[endpoint]);
    
    return [data, isLoading, error];
};
