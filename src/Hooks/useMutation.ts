import { useState } from "react";
type functionType = (...args: any[]) => Promise<Response>;

const useMutation = <T>(mutationFunction: functionType) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<string | undefined>();

  const mutate = async (data: any) => {
    setLoading(true);
    mutationFunction(data)
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
  };

  return { mutate, data, loading, error };
};

export { useMutation };
