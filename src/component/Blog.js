import { useState } from 'react';
import BlogList from './BlogList';

const Blog = () => {
    const [blogs, setBlogs] = useState([
        {id: 1, nama: 'tiqa', content: 'hai there!'},
        {id: 2, nama: 'toni', content: 'hai youtub!'},
        {id: 3, nama: 'tiqa', content: 'hehe'},
    ]);

    const deleteBlog = (id) => {
        const newBlogs = blogs.filter((blog) => blog.id != id);
        setBlogs(newBlogs);
    }

    return ( 
        <div>
            <BlogList blogs = {blogs} title = "All Blog" deleteBlog = {deleteBlog} />
            <BlogList blogs = {blogs.filter((blog) => blog.nama == 'tiqa')} title = "Tiqa Blog" deleteBlog = {deleteBlog} />
        </div>
    );
}
 
export default Blog;