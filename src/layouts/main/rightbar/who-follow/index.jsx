import SidebarSection from "~/components/sidebar-section";
import {useAccount} from "~/store/auth/hooks";
import {whoFollowUsers} from "~/mock/index.js";
import UserCard from "~/components/user-card/index.jsx";

export default function WhoFollow(){
    const account = useAccount()
    return(
        <>
            <SidebarSection title="Kimi takip etmeli" more={`/connect_people?user_id=${account.id}`}>
                {whoFollowUsers.map((user) => <UserCard user={user} key={user.id} />)}
            </SidebarSection>
        </>
    )
}/*

*/