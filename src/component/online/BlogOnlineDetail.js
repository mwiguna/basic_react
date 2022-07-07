import { useParams } from "react-router-dom";
import useFetchHelper from './useFetchHelper';

const BlogOnlineDetail = () => {
    const { id } = useParams();
    const { data: blog } = useFetchHelper('http://localhost:8000/blogs/' + id);

    return ( 
        <div className="my-5">
            {blog && 
                <div>{blog.content} by {blog.nama}</div>
            }
        </div>
    );
}
 
export default BlogOnlineDetail;