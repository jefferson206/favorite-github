import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BackButton, Container, Loading, Owner } from "./styles";
import api from "services/api";
import { FaArrowLeft } from "react-icons/fa";


function Repos() {
  const { repo } = useParams();
  const [repository, setRepository] = useState({});
  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      const [repoData, issuesData] = await Promise.all([
        api.get(`/repos/${repo}`),
        api.get(`/repos/${repo}/issues`, {
          params: {
            state: 'open', 
            per_page: 5
          }
        }),
      ]);
      setRepository(repoData.data);
      setIssues(issuesData.data);
      setLoading(false);
    }
    load();
  }, [repo]);

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

    </Container>
  );
}
  
export default Repos;
  