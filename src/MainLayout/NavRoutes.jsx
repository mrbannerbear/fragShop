import { NavLink } from "react-router-dom";
// import "./NavRoutes.css"

const NavRoutes = () => {
  const routes = [
    {
      path: "/",
      element: "Home",
    },
    {
      path: "/products",
      element: "Products",
    },
    {
      path: "/profile",
      element: "Profile",
    },
  ];
  return (
    <ul className="flex flex-row gap-5">
      {routes.map(route =>
        <li key={route.element}>
          {/* eslint-disable-next-line react/jsx-no-undef*/}
          <NavLink className={({ isActive, isPending }) =>
    isPending ? "pending" : isActive ? "underline" : ""
  } to={route.path}>{route.element}</NavLink>
        </li>
      )}
    </ul>
  );
};

export default NavRoutes;
