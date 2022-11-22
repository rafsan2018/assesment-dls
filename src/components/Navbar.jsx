import { GoogleLogout } from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllUser } from '../api/user';
import { allUserList, searchUser } from '../reducer/userListReducer';

const Navbar = ({ name, firstName, lastName, userPic }) => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const dispatch = useDispatch();
  const navigatr = useNavigate();

  const user = async () => {
    const data = await getAllUser();
    dispatch(allUserList(data));
  };

  const handleSharch = (e) => {
    if (e.target.value.trim()) {
      dispatch(searchUser(e.target.value));
    } else {
      return user();
    }
  };

  const handleLogOut = () => {
    window.localStorage.removeItem('userProfile');
    window.localStorage.removeItem('userToken');
    navigatr('/login');
  };

  return (
    <nav className="navbar bg-base-100 shadow-xl px-[10%]">
      <input
        type="text"
        placeholder="Search…"
        className="input input-bordered focus:outline-none focus:outline-offset-0 focus:shadow-md"
        onChange={handleSharch}
      />

      <div className="flex-none ml-auto">
        <a className="text-lg capitalize mr-2">{name}</a>
      </div>

      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full border-2 border-cyan-400">
            {userPic ? (
              <img src={userPic} />
            ) : (
              <h3 className="font-bold text-lg flex items-center justify-center h-full bg-gray-200 text-purple-500 uppercase">
                {firstName && firstName[0]}
                {lastName && lastName[0]}
              </h3>
            )}
          </div>
        </label>
        <ul
          tabIndex={0}
          className="rounded-md menu menu-compact dropdown-content w-40"
        >
          <a
            href="/login"
            className="bg-blue-500 text-end font-semibold rounded-md shadow-xl block"
          >
            <GoogleLogout
              clientId={clientId}
              buttonText="Logout"
              onLogoutSuccess={handleLogOut}
              className="w-full h-full"
            ></GoogleLogout>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
