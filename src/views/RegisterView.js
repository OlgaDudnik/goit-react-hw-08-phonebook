import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../redux/auth/authOperations';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import { Button } from '@mui/material';
import { ImHappy } from 'react-icons/im';
import s from '../styles/styles.module.css';

const styles = {
  form: {
    width: 200,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

const style = {
  Button: {
    display: 'block',
    marginRight: 'auto',
    marginLeft: 'auto',
  },
};

export default function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(authOperations.signUp({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className={s.Container}>
      <h1>
        Welcome! Please sign up!{' '}
        <ImHappy
          style={{ marginLeft: 4, display: 'inline-block', padding: 20 }}
        />
      </h1>
      <form onSubmit={handleSubmit} style={styles.form} autoComplete="off">
        <InputLabel>Name</InputLabel>
        <Input type="text" name="name" value={name} onChange={handleChange} />

        <InputLabel>E-mail</InputLabel>
        <Input
          type="email"
          name="email"
          value={email}
          onChange={handleChange}
        />
        <InputLabel>Password</InputLabel>
        <Input
          type="password"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <Button
          style={style.Button}
          type="submit"
          variant="outlined"
          color="primary"
        >
          Sign up
        </Button>
      </form>
    </div>
  );
}
