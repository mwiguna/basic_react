import { useEffect, useState } from 'react';

const useFetchHelper = (url) => {
    const [data, setData] = useState(null);

        useEffect(() => {
            
            fetch(url).then(res => {
                    return res.json();
                }).then(resJson => {
                    setData(resJson);
                }).catch(err => {
                    // Kalau mau nampilin error/loading di html, simpan callback di useState
                    console.log(err.message);
                })   

        }, []);

    return { data };
}

export default useFetchHelper;

//  Ini cuma helper biasa, penamaan harus dimulai dari "use"