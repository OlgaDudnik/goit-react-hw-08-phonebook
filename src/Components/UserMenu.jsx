import { useDispatch, useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import authOperations from '../redux/auth/authOperations';
import { ImHappy } from 'react-icons/im';

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  name: {
    fontWeight: 700,
    marginRight: 10,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);

  return (
    <div className={styles.container}>
      <span>
        <ImHappy style={{ marginRight: 8 }}></ImHappy>
      </span>
      <span style={styles.name}>Welcome {name}!</span>
      <button type="button" onClick={() => dispatch(authOperations.LogOut())}>
        Log out
      </button>
    </div>
  );
}
