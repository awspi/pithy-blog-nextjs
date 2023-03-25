import { usePreloadState } from '@/context/preload-context';
import React from 'react';

export default function useLoaded() {
  const preloaded = usePreloadState()
  const [isLoaded, setIsLoaded] = React.useState<boolean>(false);
  React.useEffect(() => {
    if (preloaded) {
      setIsLoaded(true);
    } else {
      setTimeout(() => {
        setIsLoaded(true);
      }, 200);
    }
  }, [preloaded]);

  return isLoaded
}
