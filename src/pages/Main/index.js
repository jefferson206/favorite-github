import { FaGithub } from "react-icons/fa";
import React from "react";
import { Container } from "./styles";
import { useTranslation } from "react-i18next";
import AddedList from "components/Main/AddedList";
import FillForm from "components/Main/FillForm";
import { useSearchRepo } from "hooks/Main/useSearchRepo";

export default function Main() {
  const { t } = useTranslation();

  const { 
    search, 
    repos, 
    alert, 
    loading, 
    handleSubmit, 
    handleSearchChange,
    handleDelete 
  } = useSearchRepo();

  return (
    <Container>

      <h1>
        <FaGithub size={25} />
        {t('Main.Title')}
      </h1>

      <FillForm 
        search={search}
        loading={loading}
        alert={alert}
        onSubmit={handleSubmit}
        onChange={handleSearchChange}
      />

      <AddedList 
        repos={repos} 
        onDelete={handleDelete}
      />

    </Container>
  );
};
