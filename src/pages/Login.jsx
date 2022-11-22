import { useEffect } from 'react';
import { GoogleLogin } from 'react-google-login';
import { gapi } from 'gapi-script';
import { useDispatch } from 'react-redux';
import { currentUser } from '../reducer/userReducer';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const clientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;

  const dispatch = useDispatch();
  const navigatr = useNavigate();

  const responseGoogle = (response) => {
    const { token_type } = response;

    console.log(token_type);

    dispatch({
      type: 'LOG_IN',
      payload: {
        profile: response.profileObj,
        token: response.tokenObj.access_token,
      },
    });
    window.localStorage.setItem(
      'userProfile',
      JSON.stringify(response.profileObj)
    );
    window.localStorage.setItem(
      'userToken',
      JSON.stringify(response.tokenObj.access_token)
    );

    setTimeout(() => {
      navigatr('/');
    }, 2000);
  };

  useEffect(() => {
    gapi.load('client:auth2', () => {
      gapi.auth2.init({ clientId });
    });
  }, []);

  // ya29.a0AeTM1id-zu9UGC-F_UREQzuz0zbnVrn0FhQ844_UtwM1Zmfvp6NejNmFrjrlJcuXocy2J5ircbneeA9rHBZKFSvpmMduyUqRu7AVIBrc9R6yTkfT72Q0wegS2VGSLc0WtELIjORLJkmzw9YwHc5Oc8j1BXMfaCgYKAfUSARASFQHWtWOmQbs3NeRsddMl4BXS4d8Rhg0163

  return (
    <div className="w-screen h-screen bg-base-100 flex justify-center items-center">
      <div className="card card-side  bg-slate-300 shadow-2xl w-[20rem] h-[25rem] flex flex-col justify-center items-center gap-6">
        <h2 className="text-xl font-semibold">Start with Authentication</h2>

        <GoogleLogin
          clientId={clientId}
          buttonText="Login With Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_originRajib'}
          className="btn bg-slate-100 text-blue-700 hover:bg-slate-200 hover:text-red-500 gap-2"
        />
      </div>
    </div>
  );
};

export default Login;
