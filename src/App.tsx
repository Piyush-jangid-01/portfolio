import { useEffect, useState } from "react";
import Squares from "./components/background/Squares";
import Hero from "./components/pages/Hero";
import Home from "./components/pages/Home";

type Page = "hero" | "home";

function App() {
  const [page, setPage] = useState<Page>("hero");

  // 🔁 Sync UI when browser back/forward is used
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      if (path === "/home") setPage("home");
      else setPage("hero");
    };

    window.addEventListener("popstate", handlePopState);
    handlePopState(); // run once on load

    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const goHome = () => {
    window.history.pushState({}, "", "/home");
    setPage("home");
  };

  return (
    <>
      {page === "hero" && (
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#271E37"
          hoverFillColor="#222222"
        >
          <Hero onEnter={goHome} />
        </Squares>
      )}

      {page === "home" && <Home/>}
    </>
  );
}

export default App;
