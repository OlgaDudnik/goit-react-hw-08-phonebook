import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';
import { Navigate } from 'react-router-dom';
import ContactsView from '../views/ContactsView';

export default function PrivateRoute() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <div>
      {isLoggedIn ? <ContactsView /> : <Navigate replace to="/login" />}
    </div>
  );
}
