import { useSelector } from 'react-redux';
import { Navbar, Card, Footer } from '../components';

const Home = () => {
  const users = useSelector((state) => state.userList.userList);
  const userProfile = useSelector((user) => user.user.userInfo);
  return (
    <section className="min-h-screen flex flex-col justify-between">
      <Navbar
        name={userProfile?.name}
        firstName={userProfile?.givenName}
        lastName={userProfile?.familyName}
        userPic={userProfile?.imageUrl}
      />
      <div className="flex-grow flex gap-4 flex-wrap justify-center items-center w-[90%] mx-auto my-4">
        {users?.length > 0 ? (
          users.map(({ id, avatar, first_name, last_name, email }) => (
            <Card
              key={id}
              avatar={avatar}
              firstName={first_name}
              lastName={last_name}
              email={email}
            />
          ))
        ) : (
          <p>No User Found...('_')</p>
        )}
      </div>
      <Footer />
    </section>
  );
};

export default Home;
