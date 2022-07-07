import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const BlogOnlineList = ({blogs, title}) => {
    const navigate = useNavigate();

    const handlerDelete = (id) => {
        fetch('http://localhost:8000/blogs/' + id, {
            method: 'DELETE',
        }).then(() => {
            navigate(0); // Refresh (Harus nya refresh state aja kalo benar2 SPA bukan browser)
        })
    }

    return ( 
        <div className="my-5">
            <div className="gold">{ title }</div>
            {
                blogs.map((blog) => (
                    <div key={blog.id}>
                        <div>{ blog.content }</div>
                        <Link to={`/online/${blog.id}`} className="btn">Detail</Link>
                        <button onClick={() => handlerDelete(blog.id)} className="btn btn-blue">Delete</button>
                    </div>
                ))
            }
        </div>
    );
}
 
export default BlogOnlineList;