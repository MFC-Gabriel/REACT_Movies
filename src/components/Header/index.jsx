import logo from "../../images/Logo.png";
import { HeaderStyle } from "./styles";
import { Link } from "react-router-dom";

export function Header() {
  return (
    
      <HeaderStyle>

        <img src={logo} alt="Logo" />

        <nav>
          <Link to='/inicio'>Inicio</Link>
          <Link to='/filmes'>Filmes</Link>
          <Link to='/series'>Series</Link>

        </nav>
      </HeaderStyle>
  
  );
}
