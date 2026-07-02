import { Link, useLocation } from "react-router-dom"

export const NavList = () => {
    const location = useLocation();
    
    return (
        <nav className="flex gap-[10px] my-[30px] ml-[20px] [&>a]:p-[5px_20px] [&>a]:border [&>a]:rounded-[5px]">
            {
                location.pathname !== "/" && <Link to={"/"}>게시물 목록</Link>
            }
            {
                location.pathname !== "/add" && <Link to={"/add"}>게시물 등록</Link>
            }
        </nav>
    )
}