import FIB from './FIB2.jpg'; // Tell webpack this JS file uses this image
import FME from './FME.jpeg';

function Experience() {
  const styleC = {
    width: "50%",
    float: "left",
    display: "inline-block"
  };

  const styleT = {
    width: "100%",
    display: "table",
  };

  return (
    <div>
      <h1>Experience</h1>      
      {/* Example content */}
      <article>
      <h2>Student Researcher - Institute of Industrial Robotics and Informatics</h2>

      <h2>SWE Intern - Google</h2>

      <h2>Student Researcher - Institute of Industrial Robotics and Informatics</h2>

      <h2>STEP Intern - Google</h2>

      <h2>Student Researcher - Polytechnic University of Catalonia</h2>
      </article>
      <h1>Education</h1>      
      {/* Example content */}
      <section>
        <h2>Dual degree in Mathematics and Computer Engineering</h2>
        <p>2022 - Present</p>
      </section>


      <div style = {styleT}>
        <div style={styleC}><img src={FME} style={styleT}></img></div>
        <div style={styleC}>
          <h3>Degree in Mathematics</h3>
        </div>
      </div>
      <br></br>
      <div style = {styleT}>
        <div style={styleC}><img src={FIB} style={styleT}></img></div>
        <div style={styleC}>
          <h3>Degree in Computer Engineering</h3>
        </div>
      </div>
    </div>
  );
}
export default Experience;
