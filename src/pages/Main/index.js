import { FaBars, FaGithub, FaPlus, FaSpinner, FaTrash } from "react-icons/fa";
import React, { useCallback, useEffect, useState } from "react";
import { Container, Form, SubmitButton, List, DeleteButton } from "./styles";
import { useTranslation } from "react-i18next";
import api from "services/api";

function Main() {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false)

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

  function handleSearchChange(event) {
    setSearch(event.target.value);
    setAlert(false);
  }

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

  const handleDelete = useCallback((repoName) => {
    const repoFind = repos.filter(repo => repo.name !== repoName);
    setRepos(repoFind);
  }, [repos]);

  return (
    <Container>

      <h1 >
        <FaGithub size={25} />
        {t('Main.Title')}
      </h1>

      <Form onSubmit={handleSubmit} >
        <input 
          type="text" 
          placeholder={t("Main.Search.Placeholder")} 
          onChange={handleSearchChange}
          value={search}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              handleSubmit(e);
            }
          }}
          style={{
            border: `1px solid ${alert ? '#e72d2d' : '#DDD'}`,
          }}
        />

        <SubmitButton disabled={loading}> 
          {loading ? (
            <FaSpinner color="#FFF" size={14}/>
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repos.map(repo => {
          return (
            <li key={repo.name}>
              <span>
                <DeleteButton onClick={() => handleDelete(repo.name) }>
                  <FaTrash size={14}/>
                </DeleteButton>
                {repo.name}
              </span>
              <a href="/">
                <FaBars size={20}/>
              </a>
            </li>
          )
        })}
      </List>
    </Container>
  );
}

export default Main;
