import Header from "@/components/header/Header";
import Footer from "@/components/header/Footer";
import Image from "next/image";

const TodoId = ({ todo }) => {
  return (
    <>
      <Header></Header>
      <div className="my-6 w-[90%] h-[75vh]  lg:w-3/4 xl:w-4/5 m-auto flex items-start  gap-4 ">
        <Image
          width={150}
          height={150}
          alt="todo"
          src={
            "https://static.vecteezy.com/system/resources/previews/009/315/281/original/3d-download-document-icon-concept-3d-white-clipboard-task-management-todo-check-list-reading-mark-symbol-on-website-download-content-for-note-book-3d-render-isolated-on-background-free-png.png"
          }
        />
        <div className="flex-1">
          <h2 className="text-2xl uppercase mb-4">{todo.title}</h2>
          <p className="capitalize text-slate-300">
            completed : {todo.completed ? "✅" : "❌"}
          </p>
        </div>
      </div>

      <Footer></Footer>
    </>
  );
};

export default TodoId;

export const getStaticPaths = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  const paths = data.map((data) => {
    return {
      params: {
        todoId: `${data.id}`,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${params.todoId}`
  );
  const data = await response.json();

  return {
    props: {
      todo: data,
    },
  };
};
