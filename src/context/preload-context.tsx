import classNames from 'classnames';
import React from 'react';

const PreloadContext = React.createContext<boolean>(false)

export default function PreloadProvider({ children }: { children: React.ReactNode }) {
  const [isPreloaded, setIsPreloaded] = React.useState<boolean>(false)
  React.useEffect(() => {
    setTimeout(() => {
      setIsPreloaded(true)
    }, 200);
  }, [])

  return (
    <PreloadContext.Provider value={isPreloaded} >
      <div
        className={
          classNames(
            'fixed inset-0 flex items-center justify-center bg-white transition-opacity dark:bg-dark',
            isPreloaded && 'pointer-events-none opacity-0'
          )
        }
      />
      {children}
    </PreloadContext.Provider>
  )
}

export const usePreloadState = () => React.useContext(PreloadContext);
