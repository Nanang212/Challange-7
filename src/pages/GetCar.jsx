import { Footer, Hero, Navbars, Forms, ListCar } from "../components";
import { themeSlice, getIsSearch } from "../slices/themeSlice";
import { useDispatch, useSelector } from "react-redux";
import styles from "../styles/GetCarPage.module.css";

export default function GetCar() {
  const { searchMode } = themeSlice.actions;
  const isSearchMode = useSelector(getIsSearch);
  const dispatch = useDispatch();
  return (
    <>
      <div
        id="filter"
        style={{ width: isSearchMode ? "100%" : "0" }}
        onClick={() => dispatch(searchMode(false))}
        className={styles.filter}
      ></div>
      <header style={{ backgroundColor: "rgba(241, 243, 255, 1)", position: "relative" }}>
        <Navbars />
        <Hero isLandingPage={false} />
      </header>
      <main style={{ backgroundColor: "#ffff" }}>
        <Forms />
        <ListCar />
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
