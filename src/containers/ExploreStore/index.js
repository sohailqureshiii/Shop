import React, { useState } from "react";
import { useSelector } from "react-redux";
import "./style.css";
import NavBar from "../Navbar";
import Footer from "../../components/Footerr/Footer";
import Store from "../../components/Store/index";

/**
 * @author
 * @function ExploreStore
 **/

const ExploreStore = (props) => {


  const renderStores = () => {
    return (
      <div style={{ padding: "30px", paddingTop: "30px" }}>
        <div className="Galleries-covers-ihH Galleries-grid-1Bv Galleries-header-14v">
          <Store/>
          <Store/>
          <Store/>
          <Store/>
        </div>
      </div>
    );
  };

  return (
    <>
      <NavBar />
      <div style={{ paddingTop: "45px" }}>
        <nav
          className="NavigationBar-subcategoryList-1nX"
          style={{
            padding: "10px",
            border: "1px solid #eaeaea",
            boxShadow: "0 2px 4px rgb(25 25 25 / 15%)",
            paddingLeft: "79px",
            overflow: "auto",
          }}
        >
          <ul style={{ display: "contents" }}>
            <li>
              <div className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua">
                <div className="SubCategory-root-mwE SubCategory-active-Sxz NavigationBar-subcategory-2m5">
                  <select
                    className="SubCategory-root-mwE SubCategory-active-Sxz NavigationBar-subcategory-2m5"
                    className="SubCategory-label-30F"
                  >
                    <option
                      className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua"
                      value=""
                    >
                      location
                    </option>

                    <option></option>
                  </select>
                </div>
              </div>
            </li>
            <li>
              <a className="router-link-exact-active router-link-active NavigationBar-subcategoryLink-3Ua">
                <div className="SubCategory-root-mwE SubCategory-active-Sxz NavigationBar-subcategory-2m5">
                  <select
                    className="SubCategory-label-30F"
                 
                    style={{ border: "none" }}
                  >
                    <option value="" style={{ border: "none" }}>
                      Category
                    </option>
                  
                      <option
                       
                        style={{ border: "none" }}
                      >
                       
                      </option>
        
                  </select>
                </div>
              </a>
            </li>
            <li>
              <div
                tabIndex="0"
                className="SearchTypeahead-searchContainer-175 SearchTypeahead-isTypeaheadEnabled-3i3"
              >
                <div className="SearchTypeahead-searchInputWrap-3Hg">
                  <div className="SearchTypeahead-searchIcon-1ld">
                    <svg viewBox="0 0 12 12" class="SearchTypeahead-icon-20K">
                      <path d="M11.407,10.421,8.818,7.832a4.276,4.276,0,1,0-.985.985l2.589,2.589a.7.7,0,0,0,.985-.985ZM2.355,5.352a3,3,0,1,1,3,3,3,3,0,0,1-3-3Z"></path>
                    </svg>
                  </div>
                  <form className="SearchTypeahead-searchForm-20c">
                    <label for="search">
                      <input
                        type="search"
                        name="search"
                        autocomplete="off"
                        placeholder="Search…"
                        aria-label="Search "
                        className="SearchTypeahead-searchInput-1qk e2e-SearchInput-input"
                      />
                    </label>
                  </form>
                </div>
                <button
                  tabIndex="-1"
                  className="Btn-button-BGn Btn-ghost-2Wn Btn-small-2_o SearchTypeahead-mobileCloseButton-OkE"
                >
                  <div className="Btn-labelWrapper-1jSE">
                    <div className="Btn-label-1Zf e2e-Btn-label">Cancel</div>
                  </div>
                </button>
              </div>
            </li>
          </ul>
        </nav>
      </div>
      <div> {renderStores()}</div>
      <Footer />
    </>
  );
};

export default ExploreStore;
