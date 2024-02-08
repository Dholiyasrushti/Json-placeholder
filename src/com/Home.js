import { Link } from "react-router-dom";

function Home(){
    return(
        <>
            <div>
                <Link to={"/Post"} className="btn"> Post</Link>
                <Link to={"/Comments"} className="btn"> Comments</Link>
                <Link to={"/Ablams"} className="btn"> Ablams</Link>
                <Link to={"/Photos"} className="btn"> Photos</Link>
                <Link to={"/Todos"} className="btn"> Todos</Link>
                <Link to={"/User"} className="btn"> User</Link>



            </div>
        </>
    )
}
export default Home;