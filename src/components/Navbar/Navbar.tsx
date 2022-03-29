import classes from "./Navbar.module.css";
import Logo from "../../images/spacex.svg";

export const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.logo}>
        <img src={Logo} alt="spacex" />
      </div>
      <ul className={classes.list}>
        <li className={classes.item}>Home</li>
        <li className={classes.item}>Launches</li>
        <li className={classes.item}>Rockets</li>
        <li className={classes.item}>Missions</li>
        <li className={classes.item}>Ships</li>
      </ul>
    </nav>
  );
};
