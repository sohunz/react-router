import { Link, Outlet } from "react-router-dom";

const About = () => {
    return (
        <div>
            <p>About</p>
            <Link to="/about/history">see history</Link>
            <Outlet />
        </div>
    );
};

export default About;
