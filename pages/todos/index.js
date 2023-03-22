import Header from "../../components/header/Header";
import Footer from "../../components/header/Footer";
import Link from "next/link";
import Image from "next/image";
const index = ({ todos }) => {
  return (
    <>
      <Header></Header>

      <h1 className="w-[95%] m-auto text-center text-4xl my-8">
        ----- Todos -----
      </h1>
      {todos.map((todo) => (
        <>
          <div
            className=" bg-slate-800 py-8 my-2 w-full md:w-[95%] md:min-w-[480px] m-auto px-4 rounded-md"
            key={todo.id}
          >
            <Link
              className="flex gap-4 items-center"
              href={`/todos/${todo.id}`}
            >
              <div>
                <Image
                  width={150}
                  height={150}
                  alt="todo"
                  src={
                    "https://static.vecteezy.com/system/resources/previews/009/315/281/original/3d-download-document-icon-concept-3d-white-clipboard-task-management-todo-check-list-reading-mark-symbol-on-website-download-content-for-note-book-3d-render-isolated-on-background-free-png.png"
                  }
                />
              </div>
              <div>
                <h1 className="uppercase text-2xl mb-2">{todo.title}</h1>
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
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();
  return {
    props: {
      todos: data.slice(0, 50),
    },
  };
};
