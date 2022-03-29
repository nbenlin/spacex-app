import { Link } from "react-router-dom";
import classes from "./Navbar.module.css";
import Logo from "../../images/spacex.svg";

export const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <img src={Logo} alt="spacex" />
      </div>
      <div className={classes.list}>
        <Link className={classes.item} to="/">
          home
        </Link>
        <Link className={classes.item} to="/launches">
          launches
        </Link>
        <Link className={classes.item} to="/rockets">
          rockets
        </Link>
        <Link className={classes.item} to="/missions">
          missions
        </Link>
        <Link className={classes.item} to="/ships">
          ships
        </Link>
      </div>
    </nav>
  );
};
