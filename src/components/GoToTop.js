import { useEffect, useState } from "react";
import { StyledGoToTop } from "./styles/GoToTop.styled";

const GoToTop = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const isTop = window.scrollY < 150;

      !isTop ? setScrolled(true) : setScrolled(false);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function handleGoToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <StyledGoToTop>
      {scrolled && <button onClick={handleGoToTop}></button>}
    </StyledGoToTop>
  );
};

export default GoToTop;
