import { Outlet, Link } from "react-router-dom";
import "./App.css";
import home from "../static/home.png";
import portfolio from "../static/portfolio.png";
import headhunting from "../static/headhunting.png";
import speachbubble from "../static/speech-bubble.png";
import me from "../static/me.jpg";
function IconItem(props) {
    let {to, icon, dropdown} = props;
    return <li>
        <Link to={to} className={"icon-item " + (dropdown ? "dropdown" : "")}>
            <img src={icon} width="40px"/>{props.children}
        </Link>
        </li>;
}
export default function App() {
    return <>
    <nav className="sidebar">
        <img src={me} width="150px"/>
        <ul>
            <IconItem to="/about" icon={home}>About</IconItem>
            <IconItem to="/showcase" icon={portfolio} dropdown>
                Portfolio
                <div className="drop-menu">
                    <h3>Websites</h3>
                    <ul>
                        <li>First example</li>
                        <li>Second Example</li>
                    </ul>
                    <h3>Machine Learning</h3>
                </div>
            </IconItem>
            <IconItem to="/employers" icon={headhunting}>Employers</IconItem>
            <IconItem to="/thoughts" icon={speachbubble}>Thoughts</IconItem>
        </ul>
    </nav>
    <div className="topbar">
        The Topbar
    </div>
    <article className="content">
        <Outlet />
    </article>
    </>
}