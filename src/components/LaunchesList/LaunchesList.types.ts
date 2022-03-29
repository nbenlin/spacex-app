export interface LaunchesListProps {
  launchesData: [
    {
      id: string;
      mission_name: string;
      links: { article_link: string; flickr_images: string[] };
      launch_site: { site_name_long: string };
    }
  ];
}
