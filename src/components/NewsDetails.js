import React, { useState, useEffect } from 'react';
import { Data } from '../Api/Data'; // Assuming Data is your array of news articles
import Nav from './Nav';
import Footer from './Footer';
import { useParams } from 'react-router-dom';

function NewsDetails() {
  const [article, setArticle] = useState(null); // State to store the matched article
  const { id } = useParams(); // Get id from URL params

  useEffect(() => {
    // Convert the id from useParams to a number (or adjust to string if necessary)
    const parsedId = Number(id); // This ensures the id from the URL is a number

    // Find the article that matches the id from the URL
    const foundArticle = Data.find((item) => item.id === parsedId);

    // If an article is found, set it to state
    if (foundArticle) {
      setArticle(foundArticle);
    }
  }, [id]); // Run this effect when id changes

  return (
    <div>
      <Nav />
      <div className="newsDetailsContainer">
        <div className="newsDetails">
          {article ? ( 
            <div>
              <h1>{article.title}</h1>
              <div className="newdetailsImg">
                <img src={article.image} alt="" />
              </div>
              <p>{article.date}</p>
              <p>{article.content}</p>
            </div>
          ) : (
            <p>Article not found.</p>
          )}
        </div>
        <div className="gobck">
          <button>
            <a href="/">Go back</a>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NewsDetails;
