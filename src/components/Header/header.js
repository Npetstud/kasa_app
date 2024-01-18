import logo from "../../Asset/Images/Logo/LOGO.svg";
import Nav from "../Navigation/Navbar";

export default function Header() {
  return (
    <header>
      <figure>
        <img src={logo} alt="logo de l'agence kasa" />
      </figure>
      <Nav/>
    </header>
  );
}