import { FaGithub, FaPlus } from "react-icons/fa"; 
import React from "react";
import { Container, Form, SubmitButton } from "./styles";

function Main() {
    return (
      <Container>
        
        <h1 >
          <FaGithub size={25} />
          My favorite repos
        </h1>

        <Form onSubmit={() => { }}>
          <input type="text" placeholder="Add Repo"/>

          <SubmitButton>
            <FaPlus color="#FFF" size={14}/>
          </SubmitButton>

        </Form>
      </Container>
    );
  }
  
  export default Main;
  