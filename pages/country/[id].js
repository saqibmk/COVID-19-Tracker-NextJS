import Layout from "../../components/Layout";
import styles from "./country.module.css";

const Country = ({ country }) => {
  console.log(country);
  return (
    <Layout title={country.country}>
      <div>
        <div className={styles.overview}>
          <img src={country.countryInfo.flag} alt={country.country}></img>
          <h1>{country.country}</h1>
          <div>Active</div>
          <div>{country.active}</div>
          <div>Critical</div>
          <div>{country.critical}</div>
          <div>Recovered</div>
          <div>{country.recovered}</div>
        </div>
      </div>
    </Layout>
  );
};

export default Country;

export const getServerSideProps = async ({ params }) => {
  const req = await fetch(
    `https://disease.sh/v3/covid-19/countries/${params.id}?strict=true`
  );
  const country = await req.json();

  return {
    props: {
      country,
    },
  };
};
