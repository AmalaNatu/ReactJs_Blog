
import BlogDetails from "./BlogDetails";
import { useParams } from "react-router";
import * as blogPosts from "../mockup Data/dbBlogData.json";
const Blog = () =>{
    const { id } = useParams();

    return(
        <div className="posts-container">
            {!!id &&  (
                blogPosts.default.filter(item => item.id === id).map(ele => (
                    <BlogDetails key={ele.id} post={ele} />
                ))
             )}
	    </div>
    );
}

export default Blog;
