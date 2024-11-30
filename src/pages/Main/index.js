import { FaGithub, FaPlus } from "react-icons/fa"; 
import React from "react";
import { Container, Form, SubmitButton } from "./styles";
import { useTranslation } from "react-i18next";

function Main() {
  const { t } = useTranslation();

    return (
      <Container>
        
        <h1 >
          <FaGithub size={25} />
          { t('Main.Title') }   
        </h1>

        <Form onSubmit={() => { }}>
          <input type="text" placeholder={t("Main.Search.Placeholder")}/>

          <SubmitButton>
            <FaPlus color="#FFF" size={14}/>
          </SubmitButton>

        </Form>
      </Container>
    );
  }
  
  export default Main;
  