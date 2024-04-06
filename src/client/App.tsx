import { useEffect, useState } from 'react';

const App = () => {
  const [message, setMessage] = useState<string>();

  useEffect(() => {
    (async () => {
      const response = await fetch('/hello');
      const { result } = await response.json();
      setMessage(result);
    })();
  });

  return <p>{message}</p>;
};

export { App };
