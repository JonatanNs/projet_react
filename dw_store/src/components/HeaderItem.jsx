import { Link, useLocation } from "react-router-dom";

export const HeaderItem = ({href, children}) => {

    const {pathname} = useLocation();
    console.log(pathname);

  return (
    <>
    {/* Solution avec CSS }
    /* <Link className={`${pathname === href && "active"}`} to={href}>{children}</Link> */}
    
    {/* Solution avec Tailwind */ }
    <Link className={`${
        pathname === href && "border-b-2 border-secondary font-bold"}`} to={href}>
    {children}</Link>
    </>
  );
}