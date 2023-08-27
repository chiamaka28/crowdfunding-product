import { useState } from "react";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  let backed = 89914;
  let backers = 5007;
  let days = 56;
  const [nav, setNav] = useState(false);
  const [count, setCount ] = useState(backers);
  console.log(count)
  const handleToggle = () => {
    setNav(!nav);
    !nav
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  };

  const increaseCount = () => {
    setCount(count + 1)
  }
  return (
    <>
      <button onClick={increaseCount}>Click me</button>
      {count}
      <Header handleToggle={handleToggle} nav={nav} />
      <Main backed={backed} backers={backers} days={days} count={count} setCount={setCount} increaseCount={increaseCount}/>
    </>
  );
}

export default App;
