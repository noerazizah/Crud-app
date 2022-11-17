import SinglePost from "../../components/single-post/Singlepost";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Single() {
    return (
        <div className="single">
            <SinglePost />
            <Sidebar />
        </div>
    );
}