import Link from "next/link";
import Image from "next/image";

const index = ({ posts }) => {
  return (
    <>
      <h1 className="w-[95%] m-auto text-center text-4xl my-8">
        ----- Post -----
      </h1>
      {posts.map((post) => (
        <>
          <div
            className=" bg-slate-800 py-8 my-2 w-full md:w-[95%] md:min-w-[480px] m-auto px-4 rounded-md"
            key={post.id}
          >
            <Link
              className="flex gap-4 items-center"
              href={`/posts/${post.id}`}
            >
              <div className="postImg">
                <Image
                  width={400}
                  height={400}
                  className="rounded-full w-[400px] sm:w-[200px] md:w-[150px] lg:w-[100px]"
                  src={`https://randomuser.me/api/portraits/men/${post.id}.jpg`}
                  alt={post.title}
                />
              </div>
              <div className="postInfo">
                <h1 className="uppercase text-2xl mb-2 w-64  truncate">
                  {post.title}
                </h1>
                <p className="capitalize text-slate-300">{post.body}</p>
              </div>
            </Link>
          </div>
        </>
      ))}
    </>
  );
};

export default index;

export async function getStaticProps() {
  // Get all post
  const postResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const postData = await postResponse.json();

  return {
    props: {
      posts: postData,
    },
  };
}
