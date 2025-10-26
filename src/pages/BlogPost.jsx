import { MathJax } from 'better-react-mathjax';
import { useParams, Link } from 'react-router-dom';
import { posts } from '../blog-data';
import './BlogPost.css';

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

  // ⚠️ SECURITY WARNING:
  // We use 'dangerouslySetInnerHTML' here because our .js file
  // contains HTML tags (<p>, <ul>). In a real app, you MUST
  // sanitize this content to prevent XSS attacks if it comes
  // from a user or external CMS. Since we trust our own file,
  // it's okay for this personal project.
  return (
    <article className="blog-post">
      <h1>{post.title}</h1>
      <p className="post-date">{post.date}</p>
      <MathJax dynamic>
      <div 
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }} 
      />
      </MathJax>
      <Link to="/blog" className="back-link">
        &larr; Back to all posts
      </Link>
    </article>
  );
}
export default BlogPost;