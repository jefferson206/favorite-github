import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackButton, Container, FilterList, IssuesList, Loading, Owner, PageActions } from "./styles";
import api from "services/api";
import { FaArrowLeft } from "react-icons/fa";
import './types';
import { useTranslation } from "react-i18next";

function Repos() {
  const { t } = useTranslation();

  const { repo } = useParams();
    /** @type {Repository | any} */
  const [repository, setRepository] = useState({});
    /** @type {Issue[] | any[]} */
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
      <BackButton to="/">
        <FaArrowLeft color="#000" size={30}/>
      </BackButton>

      <Owner>
        <img 
          src={repository?.owner?.avatar_url}
          alt={repository?.owner?.login}
        />
        <h1>{repository?.name}</h1>
        <p>{repository?.description}</p>
      </Owner>

      <FilterList active={filterIndex}>
        {filters.map((filter, index) => (
          <button 
            type="button" 
            key={filter.label} 
            onClick={() => handleChangeFilter(index)}
          >
            {t(filter.label)}
          </button>
        ))}
      </FilterList>

      <IssuesList>
        {issues.map(issue => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login}/>

            <div>
              <strong>
                <a href={issue.html_url}>{issue.title}</a>
                {issue.labels.map(label => (
                  <span key={String(label.id)}>{label.name}</span>
                ))}
              </strong>
              <p>{issue.user.login}</p>
            </div>
            
          </li>
        ))}
      </IssuesList>

      <PageActions>
        <button 
          type="button" 
          onClick={() => handlePage('back') }
          disabled={page < 2}
        >{t('Buttons.Previous')}</button>
        <button type="button" onClick={() => handlePage('next') }>{t('Buttons.Next')}</button>

      </PageActions>

    </Container>
  );
}
  
export default Repos;
  