import { useEffect, useState } from "react";

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    console.log("EFFECT #1");
    function handleScroll() {
      const { innerHeight } = window;
      const { scrollTop, offsetHeight } = document.documentElement;

      if (offsetHeight - (innerHeight + scrollTop) > 0.5) return;
      setIsFetching(true);
    }

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    console.log("EFFECT #2");
    if (!isFetching) return;

    callback(() => {
      console.log("callback!");
    });
  }, [isFetching, callback]);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
