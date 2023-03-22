import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-slate-900 py-8 w-full m-auto text-center mt-2">
      <span>
        Copyright © <Link href="/">Blog Site</Link> All Rights Reserved. Contact
        us for more information about our services.
      </span>
    </div>
  );
};

export default Footer;
