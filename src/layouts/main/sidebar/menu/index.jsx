import {NavLink} from "react-router-dom";
import classNames from "classnames";
import {mainMenu} from "~/utils/consts.jsx";
import More from '~/layouts/main/sidebar/menu/more';
import New from '~/layouts/main/sidebar/menu/new';
import {useAccount} from "~/store/auth/hooks.js";

export default function Menu() {
    const account = useAccount()
    return (
        <nav className="mt-0.5 mb-1" key={account}>
            {mainMenu.map((menu, index) => (
                <NavLink key={index} className="block group" to={typeof menu.path === 'function' ? menu.path() : menu.path}>
                    {({isActive}) => (
                        <div
                            className={classNames("p-3 rounded-full inline-flex items-center transition-colors gap-5 group-hover:bg-[color:var(--background-third)]", {"font-bold": isActive})}>
                            <div className="w-[1.641rem] h-[1.641rem] relative">
                                {menu?.notification && (
                                    <span className="w-[1.125rem] h-[1.125rem] rounded-full bg-[color:var(--color-primary)] text-white border border-[color:var(--background-primary)] absolute -top-1.5 -right-1 flex items-center justify-center text-[0.688rem]">
                                        {menu.notification}
                                    </span>
                                )}
                                {!isActive && menu.icon.default}
                                {isActive && menu.icon.active}
                            </div>
                            <div className="pr-4 text-xl">
                                {menu.title}
                            </div>
                        </div>
                    )}
                </NavLink>
            ))}
            <More />
            <New />
        </nav>
    )
}