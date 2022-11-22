import { Link } from 'react-router-dom';

const Card = ({ avatar, firstName, lastName, email }) => {
  return (
    <div
      className="min-w-[15rem] w-fit flex flex-col justify-center items-center gap-2 shadow-md p-4 bg-cyan-400
    rounded-lg text-center duration-500 hover:text-white hover:shadow-2xl bgGradient"
    >
      <figure className="h-32 w-32 rounded-full overflow-hidden border-2 border-white">
        <img
          src={avatar || '/assets/Ellipse241.png'}
          alt="Shoes"
          className="w-full h-full"
        />
      </figure>
      <div>
        {firstName ||
          (lastName && (
            <h4>
              Name :{' '}
              <span className="text-blue-700 font-medium">
                {' '}
                {firstName} {lastName}
              </span>
            </h4>
          ))}

        {email && (
          <p>
            Email :{' '}
            <Link to="#" className="lowercase hover:underline">
              {email}
            </Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
