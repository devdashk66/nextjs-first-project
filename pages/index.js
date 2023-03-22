import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex flex-wrap justify-center my-6">
        <div className="w-full sm:w-1/2 md:w-1/2 p-2">
          <Link href="/blog">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-80 text-center flex items-center justify-center flex-col">
              <h1 className="text-5xl mb-2">Blog</h1>
              <p className="text-lg text-slate-300 w-[80%]">
                Stay informed with our expert insights and latest news on blog.
                Join our community for thought-provoking articles and practical
                how-to guides
              </p>
            </div>
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 p-2">
          <Link href="/user">
            <div className="bg-gradient-to-r from-sky-500 to-indigo-500 h-80 text-center flex items-center justify-center flex-col">
              <h1 className="text-5xl mb-2">User</h1>
              <p className="text-lg text-slate-300 w-[80%]">
                Welcome to our user section, your one-stop destination for
                managing your account and accessing exclusive content. Create a
                profile, customize your settings, and stay up-to-date with the
                latest updates and announcements.
              </p>
            </div>
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 p-2">
          <Link href="/posts">
            <div className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-80 text-center flex items-center justify-center flex-col">
              <h1 className="text-5xl mb-2">Post</h1>
              <p className="text-lg text-slate-300 w-[80%]">
                Explore our latest posts and discover valuable insights. From
                in-depth analysis to quick tips and tricks, our posts cover a
                wide range of topics to help you stay informed and inspired
              </p>
            </div>
          </Link>
        </div>
        <div className="w-full sm:w-1/2 md:w-1/2 p-2">
          <Link href="/todos">
            <div className="bg-gradient-to-r from-purple-500 to-pink-500 h-80 text-center flex items-center justify-center flex-col">
              <h1 className="text-5xl mb-2">Todos</h1>
              <p className="text-lg text-slate-300 w-[80%]">
                Stay organized and on top of your tasks with our todos section.
                Keep track of your to-do list, set reminders, and prioritize
                your workload. Whether you are managing personal or professional
                projects, our todos section has got you covered
              </p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
