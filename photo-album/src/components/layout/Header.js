import { NavLink, useLocation } from "react-router-dom";
import { useContext } from "react";
import PhotosContext from "../../store/photos-context";
import classes from "./Header.module.css";

function Header() {
  const { photoList, isPhotoListMounted } = useContext(PhotosContext);
  const path = useLocation().pathname;

  let currentPage, totalResults, perPage, totalPages;
  if (isPhotoListMounted) {
    currentPage = photoList[0].page;
    totalResults = photoList[0]["total_results"];
    perPage = photoList[0]["per_page"];
    if(totalResults % perPage === 0){
      totalPages = totalResults / perPage
    }else{
      totalPages = parseInt(totalResults / perPage) + 1
    }
  }

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Photo Album</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/search">
              Search
            </NavLink>
          </li>
          {isPhotoListMounted && (
            <li>
              <NavLink activeClassName={classes.active} to={path}>
                Page: {`${currentPage} / ${totalPages}`}
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
