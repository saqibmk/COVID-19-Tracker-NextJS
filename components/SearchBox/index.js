import SearchRounded from "@material-ui/icons/SearchRounded";
import styles from "./SearchBox.module.css";

const SearchBox = ({ ...rest }) => {
  return (
    <div className={styles.wrapper}>
      <SearchRounded color="inherit" />
      <input className={styles.input} {...rest} />
    </div>
  );
};

export default SearchBox;
