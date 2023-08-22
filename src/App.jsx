import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [nav, setNav] = useState(false);

  const handleToggle = () => {
    setNav(!nav);
    !nav
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  };

  return (
    <>
      <Header handleToggle={handleToggle} nav={nav} />
      <Main />
    </>
  );
}

export default App;
