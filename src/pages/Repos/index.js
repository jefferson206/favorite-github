import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Loading } from "./styles";
import { useRepoData } from "hooks/Repos/useRepoData";
import { useRepoDataFilters } from "hooks/Repos/useRepoDataFilters";
import './types';
import { FiltersRepo, HeadersRepo, IssuesRepo, FootersRepo } from 'components/Repos';

function Repos() {
  const { repo } = useParams();
  const [ page, setPage ] = useState(1);
  const { filters, filterIndex, handleChangeFilter } = useRepoDataFilters();
  const { repository, issues, loading } = useRepoData(repo, filters, page, filterIndex);

  function handlePage(action) {
    setPage(action === 'back' ? (page - 1) : (page + 1));
  }

  if (loading) {
    return (
      <Loading>
        <h1>Loading...</h1>
      </Loading>
    );
  }

  return (
    <Container>
      <HeadersRepo repository={repository} />

      <FiltersRepo
        filters={filters}
        onFilterChange={handleChangeFilter}
        activeIndex={filterIndex}
      />

      <IssuesRepo issues={issues} />

      <FootersRepo
        page={page}
        onHandlePage={handlePage}
      />
    </Container>
  );
}

export default Repos;
