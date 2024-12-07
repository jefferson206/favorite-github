import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Loading } from "./styles";
import api from "services/api";
import './types';
import { FiltersRepo, HeadersRepo, IssuesRepo, FootersRepo } from 'components/Repos';

function Repos() {
  const { repo } = useParams();
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [filters] = useState([
    {state: 'all', label: 'Filters.Labels.All', active: true },
    {state: 'open', label: 'Filters.Labels.Open', active: false },
    {state: 'closed', label: 'Filters.Labels.Closed', active: false },
  ]);
  const [filterIndex, setFilterIndex] = useState(0);

  useEffect(() => {
    async function load() {
      const [repoData, issuesData] = await Promise.all([
        api.get(`/repos/${repo}`),
        api.get(`/repos/${repo}/issues`, {
          params: {
            state: filters.find(filter => filter.active).state, 
            per_page: 5
          }
        }),
      ]);
      setRepository(repoData.data);
      setIssues(issuesData.data);
      setLoading(false);
    }
    load();
  }, [repo, filters]);

  useEffect(() => {
    async function loadIssue() {
      const response = await api.get(`/repos/${repo}/issues`, {
        params: {
          state: filters[filterIndex].state, 
          page, 
          per_page: 5
        }
      });
      setIssues(response.data);
    }

    loadIssue();
  }, [filters, filterIndex, page, repo]);

  function handlePage(action) {
    setPage(action === 'back' ? (page - 1) : (page + 1));
  }

  function handleChangeFilter(index) {
    setFilterIndex(index);
  }

  if (loading) {
    return (
      <Loading>
        <h1>Loading...</h1>
      </Loading>
    )
  }

  return (
    <Container>
      <HeadersRepo repository={repository}/>

      <FiltersRepo 
        filters={filters}
        onFilterChange={handleChangeFilter}
        activeIndex={filterIndex}
      />

      <IssuesRepo issues={issues}/>

      <FootersRepo 
        page={page}
        onHandlePage={handlePage}
      />

    </Container>
  );
}
  
export default Repos;
  