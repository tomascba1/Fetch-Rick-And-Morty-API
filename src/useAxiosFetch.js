import { useEffect, useState } from "react";
import { API } from './API'

export const useAxiosFetch = (endpoint) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const getData = async (endpoint) => {
        try {
            const { data } = await API.get(endpoint)
                setData(data);
                setIsLoading(false)  
        } catch (err) {
            setError(err.message)
        }}

    useEffect(() => {
        getData(endpoint);
    }, [endpoint]);

    return [data, isLoading, error];
};
