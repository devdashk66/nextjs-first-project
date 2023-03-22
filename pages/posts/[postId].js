import Header from "../../components/header/Header";
import Footer from "../../components/header/Footer";
import Image from "next/image";
const PostId = ({ post }) => {
  return (
    <>
      <Header></Header>
      <div className="my-6 w-[90%]  lg:w-3/4 xl:w-4/5 m-auto flex items-start flex-col lg:flex-row gap-4">
        <Image
          width={150}
          height={150}
          className="w-28 h-28 rounded-full object-cover mb-3"
          src={`https://randomuser.me/api/portraits/men/${post.id}.jpg`}
          alt={post.title}
        />
        <div className="flex-1">
          <h2 className="text-2xl uppercase mb-4">{post.title}</h2>
          <p className="text-lg capitalize text-gray-600 leading-7 tracking-wide">
            {post.body} consectetur adipisicing elit. Doloremque cumque voluptas
            molestiae saepe voluptate possimus nobis tempora distinctio
            voluptatum alias inventore porro autem assumenda, cupiditate
            corrupti ex laboriosam velit. In non porro iste placeat natus
            dolorem quia doloribus aut quo dignissimos ea, autem sed officiis
            rerum exercitationem atque voluptatum libero velit qui labore.
            Architecto voluptate ea suscipit recusandae ad minus repudiandae
            incidunt et iste aliquam, id quis rerum tempora ratione eligendi
            similique, doloribus obcaecati. Nulla vitae corrupti impedit
            delectus possimus repudiandae vel repellendus quibusdam quos ipsum
            dolore natus quam commodi eius voluptatibus quidem non deserunt,
            autem aspernatur explicabo dolorum reprehenderit ex molestiae
            laudantium. Sit id in vero. Aperiam cumque et, quam asperiores
            aliquam ut omnis iusto, voluptatibus officiis vero nemo consectetur
            dolorum blanditiis labore illum ratione nam possimus, totam dolorem
            molestiae. Saepe et debitis numquam accusamus minus, exercitationem
            excepturi quibusdam culpa aliquam obcaecati laboriosam, laborum
            perspiciatis qui fugiat officia in! Neque ullam eligendi quidem
            molestias, laudantium odio sit, nisi vel delectus ducimus quam. Nam
            nostrum soluta mollitia excepturi inventore ipsam, dolorem quisquam
            repellendus eius. Ut, ipsam harum a non recusandae nihil, dicta
            necessitatibus voluptatibus est ipsa eveniet deserunt delectus quia
            rerum officia sunt pariatur officiis tempore placeat debitis aut
            enim? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Ducimus tenetur numquam officiis voluptas culpa. Molestiae minima
            accusantium officia recusandae inventore id. Optio omnis sequi amet
            veniam odit ipsum modi repellat. Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Beatae, fugit libero obcaecati unde
            veniam ut officiis dolores asperiores.
          </p>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default PostId;

// Set all paths
export const getStaticPaths = async () => {
  const postResponse = await fetch(
    "https://jsonplaceholder.typicode.com/posts"
  );
  const postData = await postResponse.json();

  const paths = postData.map((post) => {
    return {
      params: {
        postId: `${post.id}`,
      },
    };
  });

  return { paths, fallback: false };
};

// Get each post
export const getStaticProps = async ({ params }) => {
  // const { link } = contaxt;
  const postResponse = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postId}`
  );
  const postData = await postResponse.json();

  return {
    props: {
      post: postData,
    },
  };
};
