import React, { useState } from 'react'
import {
    Modal,
    MaterialInput,
    MaterialButton,
    DropdownMenu,
  } from "../MaterialUI";
import Shopisthan__logo_bolte from "../../img/shopisthan_logo_bolte.png";
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../../actions';

const Signup = (props) => {

  const [showLoginModal, setShowLoginModal] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [mobileno, setMobileno] = useState("");
  const auth = useSelector(state=>state.auth)
  const  dispatch = useDispatch();
  const {show,handleclose} = props;

  // const userSignup = () => {
  //   const user = { userName, email, password };
  //   if (
  //     userName === "" ||
  //     email === "" ||
  //     password === ""
  //   ) {
  //     return;
  //   }

  //   dispatch(_signup(user));
  // };

    return (
        <> 
    <Modal visible={show} onClose={() => handleclose(false)}>
    <div className="CardLayout-Toaster-Container">
            <section className="CardLayout">
              <header className="CardLayout__header">
                <h1 className="spectrum-Heading1">Sign Up</h1>
                <p className="EmailPage__instructions">
                  Already Account ?
                  <a className="spectrum-Link EmailPage__create-account-link" onClick={() => setShowLoginModal()}>
                    Login 
                  </a>
                </p>
              </header>
              <section className="CardLayout__content">
                <form>
                  <section className="EmailPage__email-field form-group">
                  <div>
                      <label className="spectrum-FieldLabel">
                        User Name
                      </label>
                      <input
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel">
                        Email Address
                      </label>
                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel">Password</label>
                      <input
                       type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel">Mobile No</label>
                      <input
                       type="mobileno"
                        value={mobileno}
                        onChange={(e) => setMobileno(e.target.value)}
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                  </section>
                  <section className="EmailPage__submit mod-submit">
                    <div className="ta-left"></div>
                    <div className="ta-right">
                      <button
                        // onClick={userSignup}
                        
                        className="spectrum-Button spectrum-Button--cta SpinnerButton SpinnerButton--right"
                      >
                        <span className="spectrum-Button-label">Submit</span>
                      </button>
                    </div>
                  </section>
                </form>
              </section>
            </section>
          </div>
        </Modal>
        </>
    )
}

export default Signup

