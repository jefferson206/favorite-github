import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import api from "services/api";

export function useSearchRepo() {
    const { t } = useTranslation();
    const [search, setSearch] = useState('');
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [alert, setAlert] = useState(false)

    const handleDelete = useCallback((repoName) => {
        setRepos(prevRepos => prevRepos.filter(repo => repo.name !== repoName));
    }, []);
    
    function handleSearchChange(event) {
        setSearch(event.target.value);
        setAlert(false);
    }

    useEffect(() => {
        const repoStorage = localStorage.getItem('repos');
        if (repoStorage) {
            setRepos(JSON.parse(repoStorage));
        };
    }, []);

    useEffect(() => {
        if (repos.length > 0) {
            localStorage.setItem('repos', JSON.stringify(repos));
        }
    }, [repos]);

    const handleSubmit = useCallback((event) => {
        event.preventDefault();
        
        async function getRepo() {
            setLoading(true);
            setAlert(false);
            try {
                if (search === '') {
                    throw new Error(t("Main.Search.NoData"));
                }
                const hasRepo = repos.find(repo => repo.name === search);
                if (hasRepo) {
                    throw new Error(t("Main.Search.Duplicated"));
                }
                const response = await api.get(`repos/${search}`);
                const data = { 
                    name: response.data.full_name,  
                };
                setRepos([...repos, data]);
                setSearch('');
            } catch (error) {
                setAlert(true);
                console.error(error);
            } finally {
                setLoading(false);
            }
        };
        getRepo();
    }, [search, repos, t]);

    return { 
        search, 
        repos, 
        alert, 
        loading, 
        handleSubmit,
        handleSearchChange, 
        handleDelete
    };
}