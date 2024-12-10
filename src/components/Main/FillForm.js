import React from "react";
import { Form, SubmitButton } from "./styles";
import { FaPlus, FaSpinner } from "react-icons/fa";
import { useTranslation } from "react-i18next";

export default function FillForm({ search, loading, alert, onSubmit, onChange}) {
    const { t } = useTranslation();

    function handleSubmit(value) {
        onSubmit(value);
    }

    function handleSearchChange(value) {
        onChange(value);
    }

    return (
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
    )
}