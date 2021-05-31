import { useContext } from 'react';
import { NavigationContext } from './NavigationProvider';

function Route({ children, path }) {
  const navigation = useContext(NavigationContext);
  if (navigation.pathname === path) return children;
  return null;
}
export default Route;
