import { useState, useEffect } from "react";
const {ROOT_URL} = require("../constants");

type queryParam = {
  url: string;
  method: string;
  payload?: Object;
  skip?: boolean;
};

const useQuery = <T>(param: queryParam) => {
  const { url, method, payload, skip = false } = param;

  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(!skip);

  useEffect(() => {
    const options = { method };
    if (payload) {
      Object.assign(options, {
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    if (!skip) {
      setLoading(true);
      fetch(ROOT_URL + url, options)
        .then((res) => {
          if (!res.ok) {
            setError("Some Error");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setLoading(false);
        })
        .catch((err) => {
          setLoading(false);
          setError(`${err}`);
        });
    }
  }, [url, method, payload, skip]);
    
    return { data, error, loading };
};

export { useQuery };
