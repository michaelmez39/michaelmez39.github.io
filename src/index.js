import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Showcase from "./Showcase";
import Resume from "./Resume";
import Blog from "./Blog";
import "./index.css"
const app = document.getElementById("app");
ReactDOM.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}>
                <Route path="/about" element={<About />} />
                <Route path="/showcase" element={<Showcase />} />
                <Route path="/employers" element={<Resume />} />
                <Route path="/thoughts" element={<Blog />} />
            </Route>
        </Routes>
    </BrowserRouter>, app);