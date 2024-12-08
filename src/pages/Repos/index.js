import React from "react";
import { useParams } from "react-router-dom";
import { Container } from "./styles";
import { useRepoData } from "hooks/Repos/useRepoData";
import { useRepoDataFilters } from "hooks/Repos/useRepoDataFilters";
import { FiltersRepo, HeadersRepo, IssuesRepo, FootersRepo } from 'components/Repos';
import LoadingComponent from "components/Loading";

function Repos() {
  const { repo } = useParams();
  const { filters, filterIndex, handleChangeFilter } = useRepoDataFilters();
  const { repository, issues, loading, page, handlePage } = useRepoData(repo, filters, filterIndex);

  if (loading) {
    return (
      <LoadingComponent />
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
