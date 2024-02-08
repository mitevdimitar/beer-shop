type NavItemProps = {
  label: string;
};

const NavItem = ({ label }: NavItemProps) => {
  //TODO: improve styling
  return (
    <div className="hidden lg:flex ml-5">
      <a href="#" className="text-sm font-semibold leading-6 text-gray-900">
        {label}
      </a>
    </div>
  );
};

export default NavItem;
