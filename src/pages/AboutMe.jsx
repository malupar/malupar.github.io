import CV from "./../autoCV.pdf"

function AboutMe() {
  return (
    <div>
      <h1>About Me</h1>
      
      {/* Example blog post snippet */}
      <article>
        <p>Hello! My name is Lucia and I am a 4th year student at CFIS-UPC, currently living in Barcelona.</p>
        <p>My main interests consist of programming, algorithmics, logic and verification. In this website I will talk about any topic related to any of this things. </p>
        <p>If you are interested in what I have worked at previously check out my <a href={CV}>CV</a>.</p>
      </article>
    </div>
  );
}
export default AboutMe;
