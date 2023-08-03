import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Carousel } from "./components/Carousel/Carousel";
import Container from "react-bootstrap/Container";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Container as="section" className="my-5 text-center">
          <h2>Popular mytineraries</h2>
          <Carousel />
        </Container>
      </main>
    </>
  );
}

export default App;
