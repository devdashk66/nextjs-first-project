import Link from "next/link";
import Header from "../../components/header/Header";
import Footer from "../../components/header/Footer";
import Image from "next/image";
const index = ({ blogs }) => {
  return (
    <>
      <Header></Header>{" "}
      <h1 className="w-[95%] m-auto text-center text-4xl my-8">
        ----- Blog -----
      </h1>
      {blogs.map((blog) => (
        <>
          <div
            className=" bg-slate-800 py-8 my-2 w-full md:w-[95%] md:min-w-[480px] m-auto px-4 rounded-md"
            key={blog.id}
          >
            <Link className="flex gap-4 items-center" href={`/blog/${blog.id}`}>
              <div className="postImg">
                <Image
                  width={400}
                  height={400}
                  className="rounded-full w-[400px] sm:w-[200px] md:w-[150px] lg:w-[100px]"
                  src={`https://randomuser.me/api/portraits/men/${
                    blog.id + 40
                  }.jpg`}
                  alt={blog.name}
                />
              </div>
              <div className="postInfo">
                <h1 className="uppercase text-2xl mb-2 w-64  truncate">
                  {blog.name}
                </h1>
                <p className="capitalize text-slate-300">{blog.body}</p>
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
  const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  const data = await response.json();

  return {
    props: {
      blogs: data.slice(0, 50),
    },
  };
};
