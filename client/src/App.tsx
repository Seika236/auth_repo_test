import "./App.css";
import RegistrationForm from "./components/RegistrationForm.tsx";
import { MyHeader } from "./components/MyHeader.tsx";
import { useState } from "react";
import { Main } from "./components/Main.tsx";

function App() {
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const setAuth = () => {
    setIsAuth(true);
  };

  return (
    <>
      <MyHeader />
      {!isAuth ? <RegistrationForm setAuth={setAuth} /> : <Main />}
    </>
  );
}

export default App;
