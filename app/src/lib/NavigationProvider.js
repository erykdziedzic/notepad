import { createContext, useEffect, useState } from 'react';
export const NavigationContext = createContext();

export default function NavigationProvider({ children }) {
  const [pathname, setPathname] = useState(window.location.pathname);

  useEffect(() => {
    const updatePathname = () => setPathname(window.location.pathname);

    window.addEventListener('popstate', updatePathname);
    return () => window.removeEventListener('popstate', updatePathname);
  });

  function navigate(pathname) {
    setPathname(pathname);
    window.history.pushState(null, null, pathname);
  }

  return (
    <NavigationContext.Provider value={{ pathname, navigate }}>
      {children}
    </NavigationContext.Provider>
  );
}
