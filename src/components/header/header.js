/* eslint-disable jsx-a11y/anchor-is-valid */
import { Component, Fragment } from "react";
import './header.css'

class Header extends Component {
  render() {
    return (
      <Fragment>
        <header className="header">
          <a className="header-logo">
            
          </a>

          <nav className="header-nav">
            <ul className="header-nav-list">
              <li className="header-nav-item">
                <a href="" className="header-nav-link">
                  Главная
                </a>
              </li>
              <li className="header-nav-item">
                <a href="" className="header-nav-link">
                  Профиль
                </a>
              </li>
            </ul>
          </nav>

          <div className="header-user-info">
            <a href="" className="header-user-info-link">
              Войти
            </a>
            <a href="" className="header-user-info-link">
              Зарегистрироваться
            </a>
          </div>
        </header>
    </Fragment>
    )
  }
}

export default Header;