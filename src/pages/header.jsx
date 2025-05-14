import {Link} from "react-router-dom";
import celticsLogo from '../assets/celtics-logo.png';

const Header = () => {
    return (
        <div className = "container py-5">
            <div className = "row">
                <div className = "col">
                    <Link>
                    <img src= {celticsLogo} alt="imagen header" width={180} /></Link>
                </div>
                <div className="col"> 
                    <ul className="nav nav-pills">
                        <li class = "nav-item">
                            <Link to = "/" class = "nav-link" aria-current = "page">Home</Link>
                        </li>
                        <li class = "nav-item">
                            <Link to = "/Family" class = "nav-link" aria-current = "page">Quinteto</Link>
                        </li>
                        <li class = "nav-item">
                            <Link to = "/History" class = "nav-link" aria-current = "page">Historia</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    )
}
export default Header;