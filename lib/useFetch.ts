import { useState, useEffect } from "react";
import fetch from 'isomorphic-unfetch';

function useFetch<T>(url:string):[T, boolean] {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(true);
  async function fetchUrl() {
    const response = await fetch(url);
    console.log(response)
    const json = await response.json();
    setData(json);
    setLoading(false);
  }
  useEffect(() => {
    fetchUrl();
  }, [url]);
  return [data, loading];
}
export { useFetch };