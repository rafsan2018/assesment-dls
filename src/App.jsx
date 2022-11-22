import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home, Login, Unauthorized } from './pages';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllUser } from './api/user';
import { allUserList } from './reducer/userListReducer';

function App() {
  const dispatch = useDispatch();
  const auth = window.localStorage.getItem('userToken');

  useEffect(() => {
    const user = async () => {
      const data = await getAllUser();
      dispatch(allUserList(data));
    };

    user();
  }, [window.location.href]);
  return (
    <>
      <Routes>
        <Route path="/login" element={auth ? <Navigate to="/" /> : <Login />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/unauthorized"
          element={auth ? <Navigate to="/" /> : <Unauthorized />}
        />
      </Routes>
    </>
  );
}

export default App;
