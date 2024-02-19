import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import Categories from "./Categories";
import { Host, User } from "@prisma/client";
import Notification from "./Notification";

interface NavbarProps {
  currentUser: User & {host: Host};
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-white z-20 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0 h-16">
            {" "}
            {/* Example height of 4rem/64px */}
            <div className="h-full flex items-center">
              <Logo />
            </div>
            <div className="flex-row h-full flex items-center">
              <Search />
            </div>
            <div className="h-full flex items-center">
              <UserMenu currentUser={currentUser} />
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
