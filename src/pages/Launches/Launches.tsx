import { gql, useQuery } from "@apollo/client";

import LaunchList from "../../components/LaunchesList";
import Loader from "../../components/Loader";

export const LIST_LAUNCHES = gql`
  query ListLaunches($offset: Int!, $limit: Int!) {
    launches: launchesPast(
      offset: $offset
      limit: $limit
      sort: "launch_date_utc"
      order: "desc"
    ) {
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
  const { data, error, fetchMore, variables, loading } = useQuery(
    LIST_LAUNCHES,
    {
      notifyOnNetworkStatusChange: true,
      variables: {
        offset: 0,
        limit: 10,
      },
    }
  );

  if (loading) return <Loader />;

  if (error) return <div>{error.message}</div>;

  const launchesData = data.launchesPast.filter(
    (launch: any) =>
      launch.links.article_link && launch.links.flickr_images.length > 0
  );

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "3rem" }}>Launchers</h1>
      <LaunchList launchesData={launchesData} />
    </>
  );
};
