
function Projects() {
  return (
    <div>
      <h1>My Projects</h1>
      <p>Here are some of the projects I've worked on.</p>
      
      {/* Example project card */}
      <article>
        <h3>Personal Portfolio</h3>
        <p>The very site you're on right now! Built with React and React Router.</p>
      </article>

      <h1>Achievements</h1>
      <h2>Spoken languages</h2>
      <article>
        <ul>
          <li>Spanish - C2 - Native</li>
          <li>English - C2 - Proficiency</li>
          <li>French - B2 - Advanced</li>
        </ul>
      </article>
      <h2>Competitions and olympiads</h2>
      <article>
        <ul>
          <li>Residence Scholarship for studying at CFIS.</li>
          <li>European Girl's Olympiad in Informatics</li>
        </ul>
      </article>

      <h1>Volunteering</h1>
      <article>
        <ul>
          <li>Girl's Olympiad in Informatics</li>
          <li>Spanish Olympiad in Informatics</li>
          <li>Catalan Olympiad in Informatics</li>
        </ul>
      </article>
    </div>
  );
}
export default Projects;
