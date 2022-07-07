import BlogOnlineList from './BlogOnlineList';
import Form from './Form';
import useFetchHelper from './useFetchHelper';

const BlogOnline = () => {
    //  Convert penamaan datas menjadi blogs, datanya dari helper
    const { data: blogs } = useFetchHelper('http://localhost:8000/blogs');

    return ( 
        <div className="my-5">
            {/* --- Jika Blogs sudah ready baru tampilkan --- */}
            {blogs && 
                <BlogOnlineList blogs={blogs} title="Data Online" />
            }

            <Form />
        </div>
    );
}
 
export default BlogOnline;