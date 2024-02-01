import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import PostDetail from "./components/PostDetail";

const App = () => {
    const posts = [
        {
            id: 1,
            title: "Title 1",
            body: "body 1",
        },
        {
            id: 2,
            title: "Title 2",
            body: "body 2",
        },
        {
            id: 3,
            title: "Title 3",
            body: "body 3",
        },
    ];
    return (
        <BrowserRouter>
            <header>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/post">Post</Link>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/post" element={<Posts posts={posts} />} />
                    <Route path="/post/:id" element={<PostDetail posts={posts} />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
};

export default App;
