import React, { useState, useEffect } from "react";

const FetchInfura = () => {
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [status, setStatus] = useState<any>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
        const res = await fetch("/api/");
        const json = await res.json();
        setResult(json);
        setStatus("success");
    } catch (error) {
        setStatus(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return { result , loading, status};
}

export default function IndexPage() {
	return (
	<div>Index Page
	<div>
	</div>
		{JSON.stringify(FetchInfura())}
	</div>)
}
