import React, { useState, useEffect } from "react";

const ApiFetcher = (api) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect((api) => {
    fetch(api)
    .then(response => {
      if(!response.ok) {
        throw Error(response.statusText);
      }

      return response.json();

    })
    .then(data => {
      setData(data)
    })
    .catch(error => {
      console.error("Error fetching data: ", error);
      setError(error.message);
    })
    .finally(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      {
        error ? <div>{error}</div> : 
        isLoading || !data ? <div/> :
        <div>
          {data}
        </div>
      }
    </>
  );
};

export default ApiFetcher;