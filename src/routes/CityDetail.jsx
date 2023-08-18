import { useLoaderData } from "react-router-dom";
export const CityDetail = () => {
  const city = useLoaderData();
  return (
    <>
      <header className="d-flex flex-column align-items-center justify-content-center p-2">
        <h1>{city.name}</h1>
        <img src={city.picture} alt={city.name} className="rounded-5 h-50" />
      </header>
      <section className="text-center">
        <h2>Under Construction 🚧</h2>
      </section>
    </>
  );
};
