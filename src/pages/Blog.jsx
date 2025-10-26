import { Link } from 'react-router-dom';
import { posts } from '../blog-data';
import './Blog.css';

function Blog() {
  return (
    <div>
      <h1>Blog</h1>
      <article>
      <p>Here is some random stuff I have been interested in:</p>


      <div className="post-list">
        {/* Map over the posts array */}
        {posts.map(post => (
          <article key={post.id} className="post-snippet">
            <h2>{post.title}</h2>
            <p className="post-date">{post.date}</p>
            <p>{post.snippet}</p>
            {post.externalUrl ? (
              <a 
                href={post.externalUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="read-more-link"
              >
                Read more...
              </a>
            ) : (
              <Link to={`/blog/${post.id}`} className="read-more-link">
                Read more...
              </Link>
            )}
          </article>
        ))}
      </div>
      </article>
    </div>
  );
}
export default Blog;
