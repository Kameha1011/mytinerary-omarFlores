import { Header } from "./components/Header/Header";
import { Hero } from "./components/Hero/Hero";
import { Carousel } from "./components/Carousel/Carousel";
import { Footer } from "./components/Footer/Footer";
import { StyledContainer } from "./globalStyles";
function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <StyledContainer as="section" className="my-5 text-center">
          <h2>Popular mytineraries</h2>
          <Carousel />
        </StyledContainer>
      </main>
      <Footer />
    </>
  );
}

export default App;
