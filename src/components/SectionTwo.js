import React,{ useEffect, useState} from 'react'
import { Data } from '../Api/Data'
import { timeAgo } from './Date';
import { TiWorldOutline } from "react-icons/ti";
import { CiClock2 } from "react-icons/ci";
import AOS from 'aos'
import 'aos/dist/aos.css'


function SectionTwo() {
  const [numb, setNumb] = useState(4)
  useEffect(()=>{
    AOS.init({duration: 2000});
  },[]);
  const truncateContent = (content, wordLimit) => {
    const words = content.split(" ");
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(" ") + "...";
    }
    return content;
  }; 
  const recentNews = Data
    .sort((a, b) => new Date(b.date) - new Date(a.date)) // Sort by date descending
    .slice(0, numb); // Get the top 3 most recent news
const Viewmore = () =>{
return  setNumb(prevNumber => prevNumber + 3)
}
  return (
    <div className='sectionTwoContainer'>
        <h1>Latest <span className='partHeader'>News</span></h1>
        <div className="gridContainer ">
          {recentNews.map((item, index)=>{
            return(
              <div className="card" key={index} data-aos = "fade-up">
                <div className="cardImg"><img src={item.image} alt="" /></div>
                <div className="cardcontent">
                  
                <h3 className="cardTitle">  {item.title} </h3> <small> <CiClock2 /> {timeAgo(item.date)} </small>
                <p className="cardContent"> {truncateContent(item.content, 20)} </p>
                <a href={`/news/${item.id}`}>Read more</a>
                </div>
              </div>
            )
          })}
        </div>
        <div className="viewmoreBtn">
        <button onClick={Viewmore}>load me</button>
        </div>
    </div>
  )
}

export default SectionTwo