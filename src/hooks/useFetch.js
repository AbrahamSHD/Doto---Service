import { useEffect, useState } from "react"

export const useFetch = ( url ) => {

    const localCache = {}
  
    const [state, setState] = useState({
        data: null,
        isLoading: true,
        hasError: false,
        error: null,
    })

    useEffect(() => {
        
        getFetch();

    }, [url]);

    const setLoadingState = () => {
        setState({
            data: null,
            isLoading: true,
            hasError: false,
            error: null,
        })
    }
    
    const getFetch = async() => {
        
        if ( localCache[url] ) {
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null,
            });
            return;
        }
        
        setLoadingState();
        const resp = await fetch( url )

        const data = await resp.json();
        setState({
            data: data,
            isLoading: false,
            hasError: false,
            error: null,
        })

        //* Manejo del caché
        localCache[url] = data;
    }
    
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
        // error: state.error,
    }
}

