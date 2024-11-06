import "./SideBar.css";
import { FaSquareWhatsapp, FaSquareGithub } from "react-icons/fa6";
import { RxLinkedinLogo } from "react-icons/rx";
import { MdEmail } from "react-icons/md";
import Link from "../Link/Link";
const SideBar = () => {
  return (
    <aside className="fixed bottom-0 right-2 h-full">
      <ul className=" h-full flex flex-col justify-center items-center gap-4">
        <li>
          <Link>
            <RxLinkedinLogo />
          </Link>
        </li>
        <li>
          <Link>
            <FaSquareGithub />
          </Link>
        </li>
        <li>
          <Link>
            <MdEmail />
          </Link>
        </li>
        <li>
          <Link>
            <FaSquareWhatsapp />
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
