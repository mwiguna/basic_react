import { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";

const Form = () => {
    const [nama, setNama] = useState('');
    const [content, setContent] = useState('');
    const [isLoading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handlerSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const blog = {nama, content};

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(blog)
        }).then((res) => res.json())
        .then((resJson) => {
            setLoading(false);
            navigate('/online/' + resJson.id);
        })
    }

    return ( 
        <div className="my-5">
            <form onSubmit={handlerSubmit}>
                <input type="text" value={nama}    onChange={(e) => setNama(e.target.value)}    placeholder="nama"/><br />
                <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="content"/><br />
                { !isLoading && <button type="submit" className='btn btn-blue'>Submit</button> }
            </form>
        </div>
    );
}
 
export default Form;