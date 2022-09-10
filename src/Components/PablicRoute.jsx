import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';

export default function PublicRoute({ children, restricted = false }) {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  const showRedirect = isLoggedIn && restricted;

  return (
    <div>{showRedirect ? <Navigate replace to="/contacts" /> : children}</div>
  );
}
