import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';


// Individual Card build-out using props
function Projects(props) {
    return (
      <div className="card h-100 p-2 m-3 border border-secondary"> 
        <h2 className="project-title" id="card-title">{props.name}</h2>
        <div className="img-container ">
          <img 
            alt={ props.name }
            src={ props.image }
            className="border border-light mb-2"
            style={{
              alignSelf: 'center',
              // height: 150,
              width: '100%',
              border: 'solid',
              // borderColor: rgb(223,223,223),
              borderWidth: 1,
            }}
          />
        </div>
        <div className="content">
              {/* <p className="project-title" id="card-title">{props.name}</p> */}
              <p>
              <a href={ props.github }><img src="https://img.icons8.com/color/48/000000/github--v1.png" alt="Repository" id="project-icon"/></a> 
              <a href={ props.deploy }><img src="https://img.icons8.com/color/48/000000/monitor.png" alt="Deployed Site" id="project-icon"/></a> 
              </p>
              <p id="topics">
                    ({ props.topics })
                </p>
        </div>
      </div>
    );
}
  
  export default Projects;