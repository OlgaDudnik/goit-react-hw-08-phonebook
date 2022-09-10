import { useSelector } from 'react-redux';
import authSelectors from '../redux/auth/authSelectors';
import UserMenu from '../Components/UserMenu';
import AuthNav from '../Components/AuthNav';
import Navigation from '../Components/Navigation';

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #2A363B',
  },
};

export default function AppBar() {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header style={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}
