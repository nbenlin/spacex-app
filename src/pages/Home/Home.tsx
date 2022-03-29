import { gql, useQuery } from "@apollo/client";
import Loader from "../../components/Loader";

const GET_COMPANY_INFO = gql`
  {
    company {
      name
      summary
    }
  }
`;

export const Home = () => {
  const { data, loading } = useQuery(GET_COMPANY_INFO);

  if (loading) return <Loader />;

  return <div>Home page.</div>;
};
