import React, { useEffect, useState } from 'react';
import myself from "../../images/isme.png";

export default function About() {

  const [offset, setOffset] = useState(0);

  useEffect(() => {
    window.removeEventListener('scroll', () => setOffset(window.pageYOffset));
    window.addEventListener('scroll', () => setOffset(window.pageYOffset), { passive: true });
    return () => window.removeEventListener('scroll', () => setOffset(window.pageYOffset));
  }, []);

  return (
    <section className={`${(offset !== 0 ) ? "scrolled2" : "not_scrolled2"} body_part`}>
      <div className={`${(offset !== 0 ) ? "scrolled" : "not_scrolled"}  pt-5 pb-5 text-center`}>
        <h3 className="margin">Who Am I?</h3>
        <img src={myself} className="rounded-circle img-responsive img-circle margin" style={{display:"inline"}} alt="Bird" width="150" height="150" />
        <h2 style={{ color: "#333c50" }}>Rastislav Kopál</h2>
        <h6>Full-stack developer</h6>
      </div>

      <article className={`container-fluid text-center pt-5 pb-5 h-100`}>
        <h3 className="margin">What is my specialization?</h3>
        <p>Software Engineer interested in full-stack development of web applications. <br/><br/>
          Experienced with micro-services based (cloud) RESTful APIs (Node.js and C/C++).  <br/><br/>
          Worked with FE technologies: <br/> React.js, JQuery, Bootstrap, Tailwind, MaterialUI etc. <br/>
        </p>
      </article>
    </section>
  )
}
