import { useState, useEffect, useCallback } from "react";
const { ROOT_URL } = require("../constants");

type queryParam = {
  url: string;
  method: string;
  payload?: Object;
  interval?: boolean;
  skip?: boolean;
};

const useQuery = <T>(param: queryParam) => {
  const { url, method, payload, skip = false, interval } = param;

  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<string | undefined>();
  const [loading, setLoading] = useState(!skip);
  const [queryCount, setQueryCount] = useState(0);

  const fetchCallback = useCallback(() => {
    const options = { method };
    if (payload) {
      Object.assign(options, {
        body: JSON.stringify(payload),
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
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
  }, [url, method, payload]);

  useEffect(() => {
    if (!skip) {
      fetchCallback();
    }
  }, [fetchCallback, skip, queryCount]);

  useEffect(() => {
    if (!interval) {
      return () => {};
    } else {
      const queryTimer = setInterval(() => {
        setQueryCount(Date.now());
      }, 500);
      return () => {
        clearInterval(queryTimer);
      };
    }
  });

  return { data, error, loading, fetchCallback };
};

export { useQuery };
