import React from 'react'; 
import Projects from './Projects'
import 'bootstrap/dist/css/bootstrap.min.css';
import projects from '../../projects.json'


function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

const Portfolio = (props) => {
  return (
    <section>
      <div className="project">
        <h1 className="title">developmentPortfolio</h1>
        <hr></hr>
      </div>

      <Wrapper id="card-data">
        {projects.map((project) => (
          <Projects key={project.id} image={project.image} name={project.name} github={project.github} deploy={project.deploy} topics={project.topics}/>
        ))}
      </Wrapper>
    </section>

);
}

export default Portfolio