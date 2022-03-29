import LaunchItem from "../LaunchItem";
import { LaunchesListProps } from "./LaunchesList.types";

export const LaunchesList = ({ launchesData }: LaunchesListProps) => {
  return (
    <>
      {launchesData.map((launch) => (
        <LaunchItem
          key={launch.id}
          name={launch.mission_name}
          link={launch.links.article_link}
          imgUrl={launch.links.flickr_images[0]}
          description={launch.launch_site.site_name_long}
        />
      ))}
    </>
  );
};
