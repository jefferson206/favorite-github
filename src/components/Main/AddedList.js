import React from "react";
import { DeleteButton, List } from "./styles";
import { FaBars, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function AddedList({ repos, onDelete }) {

    function handleDelete(value) {
        onDelete(value);
    }

    return (
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
                <Link to={`/Repos/${encodeURIComponent(repo.name)}`}>
                    <FaBars size={20}/>
                </Link>
                </li>
            )
            })}
        </List>
    )
}