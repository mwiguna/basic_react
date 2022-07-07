import { useState, useEffect } from 'react';

const Effect = () => {
    const [name, setName] = useState('Toni');
    const [age, setAge] = useState(10);
    const [gender, setGender] = useState('Male');

    //  Akan ke trigger jika init state (constructor) dan state name/age berubah
    useEffect(() => {
        console.log('effect run');
    }, [name, age]);

    return ( 
        <div className="home my-10">
            <button className='btn' onClick={() => setName('Tiqa')}>{name}</button>
            <button className='btn' onClick={() => setAge(12)}>{age}</button>
            <button className='btn' onClick={() => setGender('Female')}>{gender}</button>
        </div>
    );
}
 
export default Effect;