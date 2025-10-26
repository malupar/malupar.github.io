import { MathJaxContext } from "better-react-mathjax";
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import AboutMe from './pages/AboutMe';
import './App.css'; // For main layout styling

const config = {
  loader: { load: ["input/tex", "output/chtml"] },
  tex: {
    inlineMath: [
      ["$", "$"],        // ◄◄◄ Add this
      ["\\(", "\\)"]
    ],
    displayMath: [
      ["$$", "$$"],      // ◄◄◄ Add this
      ["\\[", "\\]"]
    ]
  }
};

function App() {
  return (
    <MathJaxContext config={config}>
    <div className="App">
      {/* The Navbar is outside the Routes, so it stays on every page */}
      <Navbar />

      {/* The 'main' container will hold the page content */}
      <main className="content">
        {/* Routes define which component to render for each URL path */}
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:postId" element={<BlogPost />} />
        </Routes>
      </main>
    </div>
    </MathJaxContext>
  );
}

export default App;
