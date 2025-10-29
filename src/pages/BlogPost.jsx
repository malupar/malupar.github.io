import { MathJax } from 'better-react-mathjax';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../blog-data';
import Timeline from '../components/Timeline';
import './BlogPost.css';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import python from 'react-syntax-highlighter/dist/esm/languages/prism/python';

const renderContentBlock = (block, index) => {
  switch (block.type) {
    case 'h2':
      // Add the 'id' here so the links can find it
      return <h2 key={index} id={block.id}>{block.text}</h2>;
    case 'h3':
      // Add the 'id' here so the links can find it
      return <h3 key={index} id={block.id}>{block.text}</h3>;
    case 'p':
      return <div 
        className="post-content"
        dangerouslySetInnerHTML={{ __html: block.text }} 
      />;
    case 'ul':
      return (
        <ul key={index}>
          {block.items.map((li, i) => <li key={i}>{li}</li>)}
        </ul>
      );
    case 'code':
      return (
    <SyntaxHighlighter
            language={block.language}
            style={oneDark}
            wrapLongLines={true}
          >
            {block.code.trim()}
          </SyntaxHighlighter>
        );
    default:
      return <p key={index}>{block.text}</p>;
  }
};


function BlogPost() {
  // Get the 'postId' from the URL, which we define in App.jsx
  const { postId } = useParams();
  
  // Find the post in our array that matches the postId
  const post = posts.find(p => p.id === postId);

  // If no post is found, show a message
  if (!post) {
    return (
      <div>
        <h2>Post not found!</h2>
        <Link to="/blog">Back to blog</Link>
      </div>
    );
  }

  const headings = post.content.filter(block => block.type === 'h2' || block.type === 'h3');

  // ⚠️ SECURITY WARNING:
  // We use 'dangerouslySetInnerHTML' here because our .js file
  // contains HTML tags (<p>, <ul>). In a real app, you MUST
  // sanitize this content to prevent XSS attacks if it comes
  // from a user or external CMS. Since we trust our own file,
  // it's okay for this personal project.
  return (

    <div className="blog-post-wrapper">
        <div className="blog-post-layout-inner">
        <article className="blog-post-content">
        <h1>{post.title}</h1>
        <p className="post-date">{post.date}</p>
        <MathJax dynamic>
        {post.content.map(renderContentBlock)}
        </MathJax>
        <Link to="/blog" className="back-link">
            &larr; Back to all posts
        </Link>

        </article>
        </div>
        <aside className="blog-post-timeline">
            <Timeline headings={headings} />
        </aside>
    </div>
  );
}
export default BlogPost;