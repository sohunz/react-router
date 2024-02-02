import { useParams } from "react-router-dom";

const PostDetail = ({ posts }) => {
    const { id } = useParams();

    const postFilter = posts.filter((post) => post.id == id);

    return (
        <div>
            <p>Post Detail - {id}</p>
            {postFilter.map((post) => {
                return (
                    <div key={post.id} className="card">
                        <p>{post.title}</p>
                        <p>{post.body}</p>
                    </div>
                );
            })}
        </div>
    );
};

export default PostDetail;
