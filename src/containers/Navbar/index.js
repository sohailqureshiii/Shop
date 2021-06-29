import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { Modal, DropdownMenu } from "../../components/MaterialUI";
import Profilepiclogo from "../../img/icons8-male-user-50.png";
import Carticon from "../../img/cart.png";
import Storeicon from "../../img/shop.png";
import Homeicon from "../../img/home.png";
import Wishlisticon from "../../img/heart.png";
import { useDispatch, useSelector } from "react-redux";

/**
 * @author
 * @function Navigationbar
 **/

const Navigationbar = (props) => {
  const [isMobile, setIsMobile] = useState(false);
  const auth = useSelector((state) => state.auth);

  const renderLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <div
            style={{ marginLeft: 10 }}
          >
            <Link href="/myprofile">
              <img
                src={Profilepiclogo}
                style={{
                  height: 22,
                  width: 22,
                  marginBottom: "3px",
                  marginRight: "4px",
                }}
                alt="Shopisthan Logo"
              />
              <span style={{ fontSize: 15 }}> Sohail</span>
            </Link>
          </div>
        }
        menus={[
          { label: "My Profile", href: "/myprofile", icon: null },
          { label: "Cart", href: "/cart", icon: null },
          {
            label: "Orders",
            href: "/account/orders",
            icon: null,
          },

          { label: "Wishlist", href: "", icon: null },
          { label: "My Chats", href: "", icon: null },
          { label: "Coupons", href: "", icon: null },
          { label: "Rewards", href: "", icon: null },
          { label: "Gift Cards", href: "", icon: null },
          { label: "Notifications", href: "", icon: null },
          { label: "Logout", href: "", icon: null,  },
        ]}
      />
    );
  };
  const renderNonLoggedInMenu = () => {
    return (
      <DropdownMenu
        menu={
          <li className="PrimaryNav-loggedOutOption-3xV">
            <Link
            >
              <div className="PrimaryNav-a11yButtonWrap-23Z">
              <Link to='/Signin'> 
              <button className="Btn-button-BGn Btn-primary-1H3 Btn-normal-hI4 js-adobeid-signup e2e-PrimaryNav-signup PrimaryNav-a11yButton-2Cl">
                  <div className="Btn-labelWrapper-1jS">
                    <div className="Btn-label-1Zf e2e-Btn-label"> Log In</div>
                  </div>
                </button>
              </Link>
                <span className="PrimaryNav-a11yButtonHelper-3Vx"></span>
              </div>
            </Link>
          </li>
        }
        menus={[{ label: "Shopisthan About us", href: "", icon: null }]}
        firstMenu={
          <div className="firstmenu">
            <span>New Customer?</span>
            <Link
              style={{ color: "#2874f0" }}
              to='/Signup'
            >
              Sign Up
            </Link>
          </div>
        }
      />
    );
  };

  return (
    <>
      <nav className="navbar">
        <h3 className="logo">
          <li className="PrimaryNav-coreNavigationItem-236 PrimaryNav-home-2zH">
            <a href="/" className="PrimaryNav-coreNavigationLink-2uv">
              <div className="PrimaryNav-logoWrap-564">
                <span>Shopisthan</span>
              </div>
            </a>
          </li>
        </h3>
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
        >
          <Link className="cart" to="/">
            <a className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-jobs">
              <h3 className="PrimaryNav-coreNavigationLabel-3rj">
                <div class="link-background">
                  <img src={Homeicon} className="homepagenavbar-icon" />
                  <a href="" class="middle">
                    Home
                  </a>
                </div>
              </h3>
            </a>
          </Link>
          <Link className="cart" to="/ExploreStore">
            <a className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-jobs">
              <h3 className="PrimaryNav-coreNavigationLabel-3rj">
                <div class="link-background">
                  <img src={Storeicon} className="homepagenavbar-icon" />
                  <a href="" class="middle">
                    Store
                  </a>
                </div>
              </h3>
            </a>
          </Link>
          <Link className="cart" to="/favorite">
            <a className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-jobs">
              <h3 className="PrimaryNav-coreNavigationLabel-3rj">
                <div class="link-background">
                  <img src={Wishlisticon} className="homepagenavbar-icon" />
                  <a href="" class="middle">
                    Favorite
                  </a>
                </div>
              </h3>
            </a>
          </Link>
          <Link className="cart" to="/cart">
            <a className="PrimaryNav-coreNavigationLink-2uv e2e-Nav-jobs">
              <h3 className="PrimaryNav-coreNavigationLabel-3rj">
                <div class="link-background">
                  <img src={Carticon} className="homepagenavbar-icon" />
                  <a href="" class="middle">
                    Cart
                  </a>
                </div>
              </h3>
            </a>
          </Link>
        </ul>
        <div className="PrimaryNav-signup-Yf6">
          <ul className="PrimaryNav-loggedOutOptions-1SQ">
            { renderNonLoggedInMenu() }
          </ul>
        </div>
        <button
          onClick={() => setIsMobile(!isMobile)}
          className="mobile-menu-icon"
        >
          {isMobile ? (
            <i className="fas fa-times"></i>
          ) : (
            <li className="fas fa-bars"></li>
          )}
        </button>
      </nav>
    </>
  );
};

export default Navigationbar;
