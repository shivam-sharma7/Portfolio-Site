import React from "react";
import { Card } from "react-bootstrap";
import Project1 from "../assets/work.png"
import Project2 from "../assets/work.png"

const Projects = () => {

  const projectList = [
    {
    id: 1,
    name: "Order Summary Component",
    imageUrl: Project1 
  },
  {
  
    id: 2,
    name: "Food Dilevry websites",
    imageUrl: Project2

  }
  


];
  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="wrapper">
        {projectList.map((item) => {

         return <div>
          <Card>
            <Card.Img variant="top" src={item.imageUrl} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
            </Card.Body>
          </Card>
         </div>
        })}
      </div>

    </div>

  )

}

export default Projects;