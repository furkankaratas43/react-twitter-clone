import Search from "~/layouts/main/rightbar/search";
import Premium from "~/components/premium";
import Topics from "~/components/topics";


export default function RightBar(){
    return(
        <aside className="w-[350px] mr-2.5">
            <Search />
            <Premium />
            <Topics />
        </aside>
    )
}