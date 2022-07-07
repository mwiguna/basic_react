import { useState } from 'react';

const State = () => {
    // Init State
    const [varName, setName] = useState('Klik Toni');

    //  Merubah State VarName
    const handler = () => {
        setName('Keren');
    }

    return ( 
        <div className="home my-10">
            <button onClick={handler}>{varName}</button>
        </div>
    );
}
 
export default State;