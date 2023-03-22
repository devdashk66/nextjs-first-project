import Header from "@/components/header/Header";
import Footer from "@/components/header/Footer";
import Link from "next/link";
import Image from "next/image";

const index = ({ users }) => {
  return (
    <>
      <Header></Header>

      <h1 className="w-[95%] m-auto text-center text-4xl my-8">
        ----- User -----
      </h1>
      {users.map((user) => (
        <>
          <div
            className=" bg-slate-800 py-8 my-2 w-full md:w-[95%] md:min-w-[480px] m-auto px-4 rounded-md"
            key={user.id}
          >
            <Link className="flex gap-4 items-center" href={`/user/${user.id}`}>
              <div className="postImg">
                <Image
                  width={200}
                  height={200}
                  className="rounded-full w-[100px] sm:w-[200px] md:w-[150px] lg:w-[100px]"
                  src={`https://randomuser.me/api/portraits/men/${
                    user.id + 80
                  }.jpg`}
                  alt={user.name}
                />
              </div>
              <div>
                <h1 className="uppercase text-2xl mb-2">{user.name}</h1>
                <p className="capitalize text-slate-300">Phone {user.phone}</p>
                <p className="capitalize text-slate-300">Email {user.email}</p>
              </div>
            </Link>
          </div>
        </>
      ))}
      <Footer></Footer>
    </>
  );
};

export default index;

export const getStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
};
