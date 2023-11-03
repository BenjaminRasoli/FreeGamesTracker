import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { customCategoryText } from "../Navbar/platforms";
import axios from "axios";
import "./Cards.css";

function Cards() {
  const [freeGamesArray, setFreeGamesArray] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const category = queryParams.get("platform");
  const customText = customCategoryText[category] || "All Games";

  useEffect(() => {
    const fetchInfo = async () => {
      const platform = new URLSearchParams(location.search).get("platform");
      let url = `https://gamerpower.p.rapidapi.com/api/filter?platform=${platform}`;
      if (!platform) {
        url = "https://gamerpower.p.rapidapi.com/api/giveaways";
      }
      const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
        },
        params: {
          platform: platform,
        },
      };

      try {
        const response = await axios(url, options);
        setFreeGamesArray(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchInfo();
  }, [location]);

  const toggleReadMore = (index) => {
    const updatedFreeGamesArray = [...freeGamesArray];
    updatedFreeGamesArray[index].showFullDescription =
      !updatedFreeGamesArray[index].showFullDescription;
    setFreeGamesArray(updatedFreeGamesArray);
  };

  return (
    <>
      <div className="customTextContainer">
        <p className="customText">{customText}</p>
      </div>
      <div className="cardsContainer">
        {freeGamesArray.map((Game, index) => (
          <div className="card" key={Game.id}>
            <img src={Game.image} alt={Game.title} className="cardImage" />
            <p className="cardTitle">{Game.title}</p>
            <p className="cardLabel">Description:</p>
            {Game.description.split(" ").length > 10 ? (
              <p className="cardDescription">
                {Game.showFullDescription
                  ? Game.description
                  : `${Game.description.split(" ").slice(0, 15).join(" ")}...`}
                <button
                  className="readButton"
                  onClick={() => toggleReadMore(index)}
                >
                  {Game.showFullDescription ? "Read Less" : "Read More"}
                </button>
              </p>
            ) : (
              <p className="cardDescription">{Game.description}</p>
            )}
            <p className="cardLabel">URL:</p>
            <a
              className="cardLink"
              href={Game.open_giveaway}
              target="_blank"
              rel="noreferrer"
            >
              <p className="cardDescription">{Game.open_giveaway}</p>
            </a>
            <p className="cardLabel">Type</p>
            <p className="cardDescription">{Game.type}</p>
            <p className="cardLabel">Published Date:</p>
            <p className="cardDescription">{Game.published_date}</p>
            <p className="cardLabel">Ending Date:</p>
            <p className="cardDescription">{Game.end_date}</p>
            <p className="cardLabel">Platforms:</p>
            <p className="cardDescription">{Game.platforms},</p>
            <p className="cardLabel">Worth:</p>
            <p className="cardDescription">{Game.worth}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
