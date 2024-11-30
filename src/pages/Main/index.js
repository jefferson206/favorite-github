import { FaGithub, FaPlus, FaSpinner } from "react-icons/fa";
import React, { useCallback, useState } from "react";
import { Container, Form, SubmitButton } from "./styles";
import { useTranslation } from "react-i18next";
import api from "services/api";

function Main() {
  const { t } = useTranslation();
  const [search, setSearch] = useState('');
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);


  function handleSearchChange(event) {
    setSearch(event.target.value)
  }

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    
    async function getRepo() {
      setLoading(true);
      try {
        const response = await api.get(`repos/${search}`);
        const data = { 
          name: response.data.full_name,  
        };
        
        setRepos([...repos, data]);
        setSearch('');
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    getRepo();

  }, [search, repos]);

  return (
    <Container>

      <h1 >
        <FaGithub size={25} />
        {t('Main.Title')}
      </h1>

      <Form onSubmit={handleSubmit}>
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
        />

        <SubmitButton disabled={loading}> 
          {loading ? (
            <FaSpinner color="#FFF" size={14}/>
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>

      </Form>
    </Container>
  );
}

export default Main;
