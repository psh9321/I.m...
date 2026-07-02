import { Link, useLocation } from "react-router-dom"

export const NavList = () => {
    const location = useLocation();


    return (
        <nav className="flex gap-[10px] my-[30px] ml-[20px] [&>a]:p-[5px_20px] [&>a]:border [&>a]:rounded-[5px]">
            {
                location.pathname !== "/" && <Link to={"/"}>useForm</Link>
            }
            {
                location.pathname !== "/formProvider" && <Link to={"/formProvider"}>formProvider</Link>
            }
            {
                location.pathname !== "/useController" && <Link to={"/useController"}>useController</Link>
            }
            {
                location.pathname !== "/useFormState" && <Link to={"/useFormState"}>useFormState</Link>
            }
          
        </nav>
    )
}