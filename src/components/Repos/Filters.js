import React from "react";
import { useTranslation } from "react-i18next";
import { FilterList } from "./styles";

export function FiltersRepo({ filters, onFilterChange, activeIndex  }) {
    const { t } = useTranslation();

    function handleChangeFilter(index) {
        onFilterChange(index);
    }

    return (
        <FilterList 
        // @ts-ignore
        active={activeIndex}>
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
    )
}