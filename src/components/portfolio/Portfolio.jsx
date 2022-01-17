import{useEffect,useState} from "react";
import PortfolioList from "../portfolioList/PortfolioList"
import "./portfolio.scss"
import {
 allPortfolio,
  webPortfolio,
  mobilePortfolio,
  javaPortfolio,
  
} from "../../data";


function Portfolio() {
  const [selected, setSelected] = useState("all");
  const [data, setData] = useState([]);
  
    const list = [
        {
          id: "all",
          title: "All",
        },
        {
          id: "web",
          title: "Web App",
        },
        {
          id: "mobile",
          title: "Mobile App",
        },
        {
          id: "java",
          title: "Java",
        },
      
      ];
      
      useEffect(() => {
        switch (selected) {
          case "all":
            setData(allPortfolio);
            break;
          case "web":
            setData(webPortfolio);
            break;
          case "mobile":
            setData(mobilePortfolio);
            break;
          case "java":
            setData(javaPortfolio);
            break;
        
          default:
            setData(allPortfolio);
        }
      }, [selected]);
      
      
    return (
        <div className="portfolio"  id="portfolio">
            <h1>Portfolio</h1>
            <ul>
          
    {list.map((item)=>(<PortfolioList     title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}/>
    ))}
       
      </ul>
      <div className="container">
      {data.map((d) => (
          <div className="item">
          
          <a href={d.link} ><img
              src={d.img}
              alt=""
              
            /></a>
            <h3>{d.title}</h3>
          
          </div>
        ))}
        
      </div>
    </div>
    )
}

export default Portfolio
