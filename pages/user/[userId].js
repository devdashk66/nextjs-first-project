import Image from "next/image";
const UserId = ({ user }) => {
  return (
    <>
      <div className="my-6 w-[90%] h-[75vh]  lg:w-3/4 xl:w-4/5 m-auto flex items-start flex-col lg:flex-row gap-4 ">
        <Image
          width={150}
          height={150}
          className="w-28 h-28 rounded-full object-cover mb-3"
          src={`https://randomuser.me/api/portraits/men/${user.id + 80}.jpg`}
          alt={user.name}
        />
        <div className="flex-1">
          <h2 className="text-2xl uppercase mb-4">
            {user.name} <span className="lowercase">({user.username})</span>
          </h2>
          <p className="capitalize text-slate-300">Phone : {user.phone}</p>
          <p className="capitalize text-slate-300">Email : {user.email}</p>
          <p className="capitalize text-slate-300">Website : {user.website}</p>
          <p className="capitalize text-slate-300">
            Address : {user.address.street}, {user.address.suite},{" "}
            {user.address.city}, {user.address.zipcode}
          </p>
        </div>
      </div>
    </>
  );
};

export default UserId;

//Get all paths
export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  const paths = data.map((data) => {
    return {
      params: {
        userId: `${data.id}`,
      },
    };
  });

  return { paths, fallback: false };
};

//Get each user

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const data = await response.json();

  return {
    props: {
      user: data,
    },
  };
};
