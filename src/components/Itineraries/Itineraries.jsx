import { StyledItinerary } from "./ItinerariesStyle";
import { AiFillDollarCircle, AiOutlineClockCircle, AiFillHeart } from "react-icons/ai";
export const Itineraries = ({ itinerary }) => {
  return (
    <article
      key={itinerary._id}
      className="d-flex flex-column gap-3 align-items-center my-2"
    >
      <h1>Itineraries</h1>
      <StyledItinerary className="d-flex">
        <div className="user-info p-2">
          <h4>{itinerary.user.name}</h4>
          <img className="img-thumbnail" src={itinerary.user.picture} />
        </div>
        <div className="d-flex flex-column itinerary-info ">
          <div className="p-2 d-flex flex-column align-items-center">
            <h2>{itinerary.name}</h2>
            <p>
              {itinerary.price >= 10000 ? (
                <>
                  <AiFillDollarCircle />
                  <AiFillDollarCircle />
                  <AiFillDollarCircle />
                </>
              ) : itinerary.price >= 1000 ? (
                <>
                  <AiFillDollarCircle />
                  <AiFillDollarCircle />
                </>
              ) : (
                <AiFillDollarCircle />
              )}
            </p>
            <p>
              <AiOutlineClockCircle className="me-1"/>
              {itinerary.duration} days
            </p>
            <div>
              {itinerary.hashtags.map((hashtag) => (
                <span key={hashtag}>#{hashtag}</span>
              ))}
            </div>
          </div>
          <button className="likes d-flex align-items-center justify-content-center">{itinerary.likes} <AiFillHeart /></button>
        </div>
      </StyledItinerary>
    </article>
  );
};
