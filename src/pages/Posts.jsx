import { Link } from "react-router-dom";

const Posts = ({posts}) => {
    return (
        <div>
            <p>Post</p>
            {posts.map((post) => {
                return (
                    <Link to= {`/post/${post.id}`}  key={post.id} >
                        <div  className="card">
                            <p>{post.title}</p>
                            <p>{post.body}</p>
                        </div>
                    </Link>
                );
            })}
        </div>
    );
};

export default Posts;
