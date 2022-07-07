import Blog from "./Blog";
import Effect from "./Effect";
import State from "./State";

const Home = () => {
    const varName = 'Tiqa';

    const handleClick = () => {
        alert("Welcome");
    }

    const handleParam = (name, e) => {
        alert("Welcome " + name, e.target);
    }

    return ( 
        <div className="home my-10">
            <div style={{
                    fontWeight: 'bold',
                    color: '#3388dd'
                }}>Home</div>

            <div onClick={handleClick} className="welcome text-3xl gold">Selamat Datang Ya!</div>
            <div onClick={(e) => handleParam(varName, e) } className="welcome">Siapa?</div>
        
            <State />
            <Blog />
            <Effect />
        </div>
    );
}
 
export default Home;