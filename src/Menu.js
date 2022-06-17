import { Link } from "react-router-dom";
import classes from "./Menu.module.css";
const Menu = () => {
  return (
    <div className={classes.nav}>
      <Link to="/home" className={classes.a}>
        Home
      </Link>
      <Link to="/about" className={classes.a}>
        About Us
      </Link>

      <Link to="/contact" className={classes.a}>
        Contact Us
      </Link>
    </div>
  );
};

export default Menu;
