import styles from "./CountriesTable.module.css";
import Link from "next/Link";
const CountriesTable = ({ countries }) => {
  return (
    <div>
      <div className={styles.heading}>
        <button className={styles.heading_name}>
          <div> Country Name</div>
        </button>
        <button className={styles.heading_last_updated}>
          <div>Last Updated</div>
        </button>
      </div>

      {countries.map((country) => (
        <Link href={`/country/${country.countryInfo.iso3}`}>
          <div className={styles.country_row}>
            <div className={styles.name}>{country.country}</div>

            <div className={styles.last_updated}>
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "2-digit",
                day: "2-digit",
              }).format(country.updated)}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CountriesTable;
