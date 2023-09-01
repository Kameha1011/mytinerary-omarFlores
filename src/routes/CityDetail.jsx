import { useParams } from "react-router-dom";
import { Itineraries } from "../components/Itineraries/Itineraries";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { get_city_by_id } from "../store/actions/cityActions";
export const CityDetail = () => {
  const city = useSelector((store) => store.cityReducer.city);
  const dispatch = useDispatch();
  const { id } = useParams();
  useEffect(() => {
    dispatch(get_city_by_id(id));
  }, [dispatch, id]);
  return (
    <>
      <header className="d-flex flex-column align-items-center justify-content-center p-2">
        <h1>
          {city.name}, {city.country}
        </h1>
        <img src={city.picture} alt={city.name} className="rounded-5 h-50" />
      </header>
      <section className="text-center">
        {city.itineraries?.map((itinerary) => (
          <Itineraries itinerary={itinerary} key={itinerary._id} />
        ))}
      </section>
    </>
  );
};
