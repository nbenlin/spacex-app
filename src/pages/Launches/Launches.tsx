import { gql, useQuery } from "@apollo/client";
import LaunchList from "../../components/LaunchesList";
import Loader from "../../components/Loader";

const GET_LAUNCHES_QUERY = gql`
  {
    launchesPast(limit: 15) {
      mission_name
      launch_site {
        site_name_long
      }
      links {
        article_link
        flickr_images
      }
      id
    }
  }
`;

export const Launches: React.FC = () => {
  const { data, loading } = useQuery(GET_LAUNCHES_QUERY);

  if (loading) return <Loader />;

  const launchesData = data.launchesPast.filter(
    (launch: any) =>
      launch.links.article_link && launch.links.flickr_images.length > 0
  );

  console.log("dat", data);

  return (
    <div>
      <h1>Launchers</h1>
      <LaunchList launchesData={launchesData} />
    </div>
  );
};
