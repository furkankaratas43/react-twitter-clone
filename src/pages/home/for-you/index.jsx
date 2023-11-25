import { posts } from "~/mock/posts";
import Post from "~/components/post/index.jsx";

export default function ForYou(){
    return (
        <>
            {posts.map(p => <Post post={p} key={p.id} />)}
        </>
    )
}