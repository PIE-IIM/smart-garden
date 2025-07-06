import { useEffect, useState } from 'react';

const useAfterMounted = (callback: () => Promise<void>) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      callback();
    }
  }, [isMounted]);

  return {};
};

export default useAfterMounted;
