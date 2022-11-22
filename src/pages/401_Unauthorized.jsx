import { Link } from 'react-router-dom';

const Unauthorized = () => {
  return (
    <section className="h-screen flex flex-col justify-center items-center">
      <img
        src="/assets/Unauthorized.jpg"
        alt="Unauthorized"
        className="w-96 h-96"
      />

      <Link
        to="/login"
        className="btn border-0 bg-purple-500 text-white px-20 hover:bg-blue-500"
      >
        Login
      </Link>
    </section>
  );
};

export default Unauthorized;
