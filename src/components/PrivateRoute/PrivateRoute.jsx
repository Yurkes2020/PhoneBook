import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selectors';

function PrivateRoute({ component: Component, redirectTo = '/' }) {
  const isLoggedIn = useSelector(state => getIsLoggedIn(state));
  return !isLoggedIn ? <Navigate to={redirectTo} /> : Component;
  // if (!isLoggedIn) return <Navigate to={redirectTo} />;
}

export default PrivateRoute;
