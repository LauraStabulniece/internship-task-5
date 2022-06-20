import { Route, Routes } from "react-router-dom"
import About from "../pages/About";
import Diary from "../pages/Diary";
import Landing from "../pages/Landing";
import Look from "../pages/Look";
import Footer from "./Footer"
import Header from "./Header"

function Content() {
    return (
        <div>
            <Header />
            <Routes>
                <Route>
                    <Route path="/" element={<Landing />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/look" element={<Look />} />
                    <Route path="/diary" element={<Diary />} />
                </Route>
            </Routes>
            <Footer />
        </div>
    );
}
export default Content