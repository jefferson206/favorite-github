import React from "react";
import { useParams } from "react-router-dom";

function Repos() {
  const { repo } = useParams();
    return (
      <div >
        <h1 style={{
          color: '#FFF'
        }}>{decodeURIComponent(repo)}</h1>
      </div>
    );
  }
  
  export default Repos;
  