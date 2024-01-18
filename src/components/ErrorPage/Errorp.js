import { NavLink } from "react-router-dom";
export default function NoPage() {
  return (
    <>
      <div>
        <p>404</p>
        <p>
          Oups! La page que vous demandez n'existe pas.
        </p>
        <NavLink to="/">
          Retourner sur la page d'accueil
        </NavLink>
      </div>
    </>
  );
}