
import { Outlet , Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/users">Users</Link>
                    </li>
                    <li>
                        <Link to="/mentors">Mentors</Link>
                    </li>
                    <li>
                        <Link to="/faqs">FAQs</Link>
                    </li>
                    <li>
                        <Link to="/features">Features</Link>
                    </li>
                    <li>
                        <Link to="/blogs">Blogs</Link>
                    </li>
                    <li>
                        <Link to="/applications">Applications</Link>
                    </li>
                    <li>
                        <Link to="/contacts">Queries</Link>
                    </li>
                    <li>
                        <Link to="/charts">Charts</Link>
                    </li>
                    <li>
                        <Link to=""></Link>
                    </li>
                </ul>
            </nav>
            <Outlet></Outlet>
        </>
    )
};

export default Layout;