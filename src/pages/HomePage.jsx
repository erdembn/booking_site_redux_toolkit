import CardContainer from "../components/cardContainer/CardContainer";
import "./HomePage.css";

const HomePage = () => {
  return (
    <div className="home-page-container">
      <h1>Hoşgeldiniz</h1>
      <p>Hayalinizdeki evi kaçırmayın, randevu alın!</p>

      <CardContainer />
    </div>
  );
};

export default HomePage;
