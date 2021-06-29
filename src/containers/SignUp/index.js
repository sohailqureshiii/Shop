import React from 'react'
import { Link }  from "react-router-dom";


const Signup = (props) => {
    return (
        <div className="CardLayout-Toaster-Container">
            <section className="CardLayout">
              <header className="CardLayout__header">
                <h1 className="spectrum-Heading1">Sign Up</h1>
                <p className="EmailPage__instructions">
                  Already Account ?
                  <Link className="spectrum-Link EmailPage__create-account-link" to='/Signin'>
                    Login 
                  </Link>
                </p>
              </header>
              <section className="CardLayout__content">
                <form>
                  <section className="EmailPage__email-field form-group">
                    <div>
                      <label className="spectrum-FieldLabel">
                        Email Address
                      </label>
                      <input
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel">
                        Mobile Number
                      </label>
                      <input
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel">
                        User Name
                      </label>
                      <input
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                    <div>
                      <label className="spectrum-FieldLabel">Password</label>
                      <input
                       type="password"
                        className="spectrum-Textfield spectrum-Textfield--quiet"
                      ></input>
                    </div>
                  </section>
                  <section className="EmailPage__submit mod-submit">
                    <div className="ta-left"></div>
                    <div className="ta-right">
                      <button
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
    )
}

export default Signup;