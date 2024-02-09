import { ROUTES } from "@/utils/constants";
import NavItem from "./nav-item";

const NavBar = () => {
  //TODO: add mobile menu
  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex items-center justify-end p-6 lg:px-8"
        aria-label="Global"
      >
        {ROUTES.map((route, i) => (
          <NavItem label={route.label} key={i} />
        ))}
      </nav>
    </header>
  );
};

export default NavBar;
