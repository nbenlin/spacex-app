import { gql, useQuery } from "@apollo/client";
import Loader from "../../components/Loader";
import Main from "../../components/Main";
import classes from "./Home.module.css";

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

  return (
    <div className={classes.home}>
      <Main name={data.company.name} description={data.company.summary} />
    </div>
  );
};
