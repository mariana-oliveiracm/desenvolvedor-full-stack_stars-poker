import { Link } from "react-router-dom";

export default function BackButton(){

    return(
        <div>
            <Link to={{pathname: "/"}}>
                <button type="button" className="btn btn-outline-warning btn-sm">Voltar</button>
            </Link>
        </div>
    );
}