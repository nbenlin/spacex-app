import classes from "./Main.module.css";
import { MainProps } from "./Main.types";

export const Main = ({ name, description }: MainProps) => {
  return (
    <div className={classes.main}>
      <h1 className={classes.name}>{name}</h1>
      <p className={classes.description}>{description}</p>
    </div>
  );
};
