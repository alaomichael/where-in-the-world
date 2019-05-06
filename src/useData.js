import React from 'react';

export default function useData(url) {
  const [cache, updateCache] = React.useState(false);
  React.useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        updateCache(data);
      });
  }, [url]);
  return cache;
}
