import { useEffect, useState } from "react";
import morty from "../api/morty";

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState("");

  const searchApi = async (initKeyword) => {
    try {
      const response = await morty.get("character", {
        params: {
          name: initKeyword,
        },
      });
      setResults(response.data.results);
    } catch (e) {
      setError("Error:" + e);
    }
  };

  useEffect(() => {
    searchApi("rick");
  }, []);

  return [searchApi, results, error];
};
