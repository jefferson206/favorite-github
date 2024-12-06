import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { BackButton, Owner } from "./styles";

export function HeadersRepo({repository}) {
    
    return (
        <>
            <BackButton to="/">
                <FaArrowLeft color="#000" size={30}/>
            </BackButton>

            <Owner>
                <img 
                    src={repository.owner.avatar_url}
                    alt={repository.owner.login}
                />
                <h1>{repository.name}</h1>
                <p>{repository.description}</p>
            </Owner>
        </>
    );
}