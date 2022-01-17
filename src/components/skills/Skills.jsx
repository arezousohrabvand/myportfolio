import { useState } from "react";
import "./skills.scss";
function Skills() {
    
        const [currentSlide, setCurrentSlide] = useState(0);
        const data = [
          {
            id: "1",
            icon: "./assets/webdesign.png",
            title: "Web Development",
            desc:
              "HTML/CSS,JavaScript Frameworks React,Express,Node.js,SCSS,SASS, Git Version Control ",
            
              
          },
          {
            id: "2",
            icon: "./assets/mobile dev.png",
            title: "Mobile Development",
            desc:
              "Mobile User Interface Design,Familiarized with mobile platform Application Programming Interfaces (API) such as Apple iOS, Android and Windows Mobile(Kotlin,Java and swift)",
  
          },
          {
            id: "3",
            icon: "./assets/stat.png",
            title: "Data Analysis",
            desc:
              "MsSQL,MySQL,PostgreSQL, MangoDB,Firebase,Azure,AWS, Excel,Python,Data visualization"
          
        
          },
        ];
      
        const handleClick = (way) => {
          way === "left"
            ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
            : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
        };
        
        return (
          <div className="skills" id="skills">
            <div
              className="slider"
              style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
            >
              {data.map((d) => (
                <div className="container">
                  <div className="item">
                    <div className="left">
                      <div className="leftContainer">
                        <div className="imgContainer">
                          <img src={d.icon} alt="" />
                        </div>
                        <h2>{d.title}</h2>
                        <p>{d.desc}</p>
                      </div>
                    </div>
                    <div className="right">
                      <img
                        src="https://www.dreamhost.com/blog/wp-content/uploads/2018/09/elements-web-design-opt-750x498.jpg?auto=format&q=60&fit=max&w=930"
                        alt=""
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <img
              src="assets/arrow.png"
              className="arrow left"
              alt=""
              onClick={() => handleClick("left")}
            />
            <img
              src="assets/arrow.png"
              className="arrow right"
              alt=""
              onClick={() => handleClick()}
            />
          </div>
    )
}

export default Skills
