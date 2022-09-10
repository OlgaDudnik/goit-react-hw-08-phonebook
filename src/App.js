import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AppBar from './Components/AppBar';
import authOperations from './redux/auth/authOperations';
import authSelectors from './redux/auth/authSelectors';
import PrivateRoute from './Components/PrivateRoute';
import PablicRoute from './Components/PablicRoute';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import './styles/styles.module.css';

export default function App() {
  const isRefreshing = useSelector(authSelectors.getIsFetchingCurrent);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    !isRefreshing && (
      <>
        <AppBar />
        <Routes>
          <Route path="/" element={<PrivateRoute />} />
          <Route path="/contacts" element={<PrivateRoute />} />
          <Route
            path="/login"
            element={
              <PablicRoute restricted>
                <LoginView />
              </PablicRoute>
            }
          />

          <Route
            path="/register"
            element={
              <PablicRoute restricted>
                <RegisterView />
              </PablicRoute>
            }
          />
        </Routes>
      </>
    )
  );
}
