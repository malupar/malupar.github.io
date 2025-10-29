import React from 'react';
import './Timeline.css';


function Timeline({ headings }) {
  const nestedHeadings = [];
  let currentH2 = null;

  headings.forEach(heading => {
    if (heading.type === 'h2') {
      // Start a new H2 section
      currentH2 = { ...heading, subsections: [] };
      nestedHeadings.push(currentH2);
    } else if (heading.type === 'h3' && currentH2) {
      // Add H3 to the *current* H2
      currentH2.subsections.push(heading);
    }
  });

  if (nestedHeadings.length === 0) {
    return null;
  }

  return (
    <nav className="timeline">
      <strong>Table of contents</strong>
      <ul className="timeline-list">
        {nestedHeadings.map(h2 => (
          <li key={h2.id} className="timeline-h2">
            <a href={`#${h2.id}`}>{h2.text}</a>
            
            {h2.subsections.length > 0 && (
              <ul className="timeline-subsection-list">
                {h2.subsections.map(h3 => (
                  <li key={h3.id} className="timeline-h3">
                    <a href={`#${h3.id}`}>{h3.text}</a>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Timeline;