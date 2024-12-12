import React from "react";
import Routers from "./routes";
import GlobalStyle from "./styles/global";
import LanguageSwitcher from "components/LanguageSwitcher";

function App() {
  return (
    <>
      <GlobalStyle />
      <LanguageSwitcher />
      <Routers></Routers>
    </>
  );
}

export default App;
