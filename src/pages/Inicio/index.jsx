import { Banner } from "../../components/Banner";
import cardserie from "../../images/card-movie.png";
import cardmovie from "../../images/card-movie (1).png";
import { Link } from "react-router-dom";
import { CardsHomeStyle } from "./styles";

export function Inicio() {
  return (
    <>
      <Banner title="Filmes">
        <p>
          Lista de Filmes e series baseada na API the Movie DB, confira as
          produções mais populares do mundo.
        </p>
      </Banner>

      <CardsHomeStyle>
        <Link to="/series">
          <img src={cardserie} alt="" />
        </Link>

        <Link to="/filmes">
          <img src={cardmovie} alt="" />
        </Link>
      </CardsHomeStyle>
    </>
  );
}
