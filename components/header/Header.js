import Link from "next/link";

const header = () => {
  return (
    <header className="bg-slate-900">
      <nav className="flex justify-between items-center w-[95%] mw-[480px] m-auto py-8">
        <div className="logo">
          <Link href="/">Blog Site</Link>
        </div>
        <div className="menu">
          <ul className="flex gap-4 capitalize">
            <li>
              <Link href="/">home</Link>
            </li>
            <li>
              <Link href="/blog">blog</Link>
            </li>
            <li>
              <Link href="/user">user</Link>
            </li>
            <li>
              <Link href="/posts">post</Link>
            </li>
            <li>
              <Link href="/todos">todos</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default header;
