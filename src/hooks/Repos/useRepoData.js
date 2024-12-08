import { useState, useEffect } from "react";
import api from "services/api";

export function useRepoData(repo, filters, filterIndex) {
  const [ repository, setRepository ] = useState({});
  const [ issues, setIssues ] = useState([]);
  const [ loading, setLoading ] = useState(true);
  const [ page, setPage ] = useState(1);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const [repoData, issuesData] = await Promise.all([
          api.get(`/repos/${repo}`),
          api.get(`/repos/${repo}/issues`, {
            params: {
              state: filters.find(filter => filter.active).state, 
              per_page: 5,
            },
          }),
        ]);
        setRepository(repoData.data);
        setIssues(issuesData.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [repo, filters]);

  useEffect(() => {
    async function loadIssuesByFilter() {
      const response = await api.get(`/repos/${repo}/issues`, {
        params: {
          state: filters[filterIndex].state,
          page,
          per_page: 5,
        },
      });
      setIssues(response.data);
    }

    loadIssuesByFilter();
  }, [filters, filterIndex, page, repo]);

  function handlePage(action) {
    setPage(action === 'back' ? (page - 1) : (page + 1));
  }

  return { repository, issues, loading, page, handlePage };
}
