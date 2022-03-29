import classes from "./LaunchItem.module.css";
import { LaunchItemProps } from "./LaunchItem.types";

export const LaunchItem = ({
  name,
  link,
  imgUrl,
  description,
}: LaunchItemProps) => (
  <div className={classes.launchItem}>
    <img src={imgUrl} alt={name} />
    <div className={classes.launchItemContent}>
      <h5>{name}</h5>
      <p>{description}</p>
    </div>
  </div>
);
