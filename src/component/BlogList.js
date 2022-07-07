const BlogList = ({blogs, title, deleteBlog}) => {
    return ( 
        <div className="my-5">
            <div className="gold">{ title }</div>
            {
                blogs.map((blog) => (
                    <div key={blog.id}>
                        <div>{ blog.content }</div>
                        <button className="btn btn-blue" onClick={() => deleteBlog(blog.id) }>Delete</button>
                    </div>
                ))
            }
        </div>
    );
}
 
export default BlogList;