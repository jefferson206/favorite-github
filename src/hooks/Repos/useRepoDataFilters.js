import { useState } from "react";

export function useRepoDataFilters() {
  const [filters] = useState([
    { state: "all", label: "Filters.Labels.All", active: true },
    { state: "open", label: "Filters.Labels.Open", active: false },
    { state: "closed", label: "Filters.Labels.Closed", active: false },
  ]);
  const [filterIndex, setFilterIndex] = useState(0);

  function handleChangeFilter(index) {
    setFilterIndex(index);
  }

  return {
    filters,
    filterIndex,
    handleChangeFilter,
  };
}
