import Head from "next/head";
import { useState } from "react";
import styles from "../styles/Home.module.css";
import SearchBox from "../components/SearchBox";
import CountriesTable from "../components/CountriesTable";

import Layout from "../components/Layout";

export default function Home({ countries }) {
  const [keyword, setKeyword] = useState("");

  const filteredCountries = countries.filter((c) =>
    c.country.toLowerCase().includes(keyword)
  );

  const onInputChange = (e) => {
    e.preventDefault();
    setKeyword(e.target.value.toLowerCase());
  };
  return (
    <Layout>
      <div className={styles.counts}>
        {" "}
        Data available for {countries.length} countries
      </div>
      <SearchBox placeholder="Search for country" onChange={onInputChange} />
      <CountriesTable countries={filteredCountries} />
    </Layout>
  );
}

export const getStaticProps = async () => {
  const req = await fetch("https://disease.sh/v3/covid-19/countries");
  const countries = await req.json();
  return {
    props: {
      countries,
    },
  };
};
