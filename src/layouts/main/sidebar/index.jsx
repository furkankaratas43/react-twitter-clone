import Logo from "~/layouts/main/sidebar/logo";
import Menu from "~/layouts/main/sidebar/menu/index.jsx";

export default function Sidebar(){
    return(
        <aside className="w-[275px] min-h-screen">
            <Logo />
            <Menu />
            Sidebar
        </aside>
    )
}