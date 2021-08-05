import { useState,useEffect } from "react"
// API
import API from '../API';
// Local storage
import { isPersistedState } from "../helpers";

const initialState = {
    page: 0,
    results: [],
    total_page: 0,
    total_results: 0
}

export const useHomeFetch = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [state,setState] = useState(initialState)
    const [loading,setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [isLoadingMore, setIsLoadingMore] = useState(false)

    console.log(searchTerm)

    const fetchMovies = async (page, searchTerm= '') => {
        try{
            setError(false);
            setLoading(true);

            const movies = await API.fetchMovies(searchTerm, page);
            
            setState(prev => ({
                ...movies,
                result:
                    page>1 ? [...prev.results, movies.results] : [...movies.results]
            }))
        }
        catch {
            setError(true)
        }
        setLoading(false)
    };
// initial render && search
    useEffect(() => {
        if (!searchTerm){
            const SessionState = isPersistedState('homeState')

            if(SessionState){
                console.log('Grabbing from session storage')
                setState(SessionState);
                return;
            }
        }
        console.log('Grabbing from API')
        setState(initialState);
        fetchMovies(1, searchTerm)
    },[searchTerm]);
// load more
    useEffect(() => {
        if(!isLoadingMore) return;

        fetchMovies(state.page + 1, searchTerm);
        setIsLoadingMore(false)

    }, [state.page, searchTerm, isLoadingMore])

// session storage
    useEffect(() => {
        if(!searchTerm) sessionStorage.setItem('homeState', JSON.stringify(state))
    },[searchTerm, state])

    return {state, loading, error, setSearchTerm, searchTerm, setIsLoadingMore}
}